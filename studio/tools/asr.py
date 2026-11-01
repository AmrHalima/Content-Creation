#!/usr/bin/env python3
"""Word-level timings from a local faster-whisper model.

Used by studio cues when `hyperframes transcribe` reports whisper_unavailable.
Two deliberate workarounds for this machine:

  * audio is decoded with the stdlib + numpy (or ffmpeg) instead of PyAV —
    installed PyAV rejects faster-whisper's `metadata_errors` kwarg.
  * `local_files_only=True` — the network on this box drops DNS mid-run, so a
    missing cache entry must fail fast into the deterministic fallback rather
    than hang.

usage: asr.py <audio> --language en --model small [--json-out FILE]
prints {"words":[{"text","start","end"}], "model":..., "language":...}
"""
import argparse
import json
import subprocess
import sys
import wave

import numpy as np


def decode(path):
    if path.lower().endswith(".wav"):
        try:
            with wave.open(path, "rb") as w:
                sr, sw, ch, n = w.getframerate(), w.getsampwidth(), w.getnchannels(), w.getnframes()
                raw = w.readframes(n)
            if sw == 2:
                flat = np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768.0
            elif sw == 4:
                flat = np.frombuffer(raw, dtype=np.int32).astype(np.float32) / 2147483648.0
            elif sw == 1:
                flat = (np.frombuffer(raw, dtype=np.uint8).astype(np.float32) - 128.0) / 128.0
            else:
                raise ValueError(f"unsupported sample width {sw}")
            if ch > 1:
                flat = flat.reshape(-1, ch).mean(axis=1)
            return resample(flat, sr)
        except Exception as e:  # noqa: BLE001 - fall through to ffmpeg
            print(f"wav fast path failed ({e}); using ffmpeg", file=sys.stderr)
    cmd = [
        "ffmpeg", "-v", "error", "-i", path, "-ac", "1", "-ar", "16000",
        "-f", "f32le", "-",
    ]
    raw = subprocess.run(cmd, check=True, capture_output=True).stdout
    return np.frombuffer(raw, dtype=np.float32)


def resample(a, sr):
    if sr == 16000:
        return a
    n = int(len(a) * 16000 / sr)
    idx = np.linspace(0, len(a) - 1, n).astype(np.int64)
    return a[idx]


def main():
    p = argparse.ArgumentParser()
    p.add_argument("audio")
    p.add_argument("--language", default="en")
    p.add_argument("--model", default="small")
    p.add_argument("--json-out", default=None)
    args = p.parse_args()

    sys.stdout.reconfigure(encoding="utf-8")
    from faster_whisper import WhisperModel

    model = WhisperModel(args.model, device="cpu", compute_type="int8", local_files_only=True)
    audio = decode(args.audio)
    segs, info = model.transcribe(
        audio,
        word_timestamps=True,
        language=args.language or None,
        vad_filter=False,
    )
    words = []
    for s in segs:
        for w in s.words or []:
            words.append({"text": w.word, "start": round(float(w.start), 3), "end": round(float(w.end), 3)})
    out = {"words": words, "model": args.model, "language": info.language if info else args.language,
           "duration_s": round(len(audio) / 16000.0, 3)}
    text = json.dumps(out, ensure_ascii=False)
    if args.json_out:
        with open(args.json_out, "w", encoding="utf-8") as f:
            f.write(text)
    print(text)


if __name__ == "__main__":
    main()
