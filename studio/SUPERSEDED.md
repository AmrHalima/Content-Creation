# Superseded per-project workarounds

These files solved real problems, but each one is now covered by a shared tool. They
are left on disk for provenance — **do not run or copy them into new work**; use the
studio command instead.

| Where | What it did | Use instead |
|---|---|---|
| `videos/osi-layers-1-sideways/.hyperframes/cue-times.mjs` | char-proportional word clock from SCRIPT.md + measured durations | `studio cues` |
| `videos/osi-layers-2-the-seam/.hyperframes/cue-times.mjs` | same, copied | `studio cues` |
| `videos/osi-layers-3-leaks/.hyperframes/cue-times.mjs` | same, copied again | `studio cues` |
| `videos/osi-layers-3-leaks/.hyperframes/merge-cues.mjs` | folded cue times into **both** audio metas (the `fetch-sfx` wipe fix) | `studio cues` (writes both, in the right order) |
| `videos/sdlc/tools/build-word-timings.mjs` | word timings from a hard-coded silencedetect table for that one film's 9 lines | `studio cues` (measures every film generically) |
| `videos/osi-layers-1-sideways/.hyperframes/engine-kokoro.mjs` | pinned the TTS provider by wrapping the media engine | `studio voice` + `studio/tools/engine.mjs` (one shared adapter for the workspace) |
| `videos/osi-layers-{2,3}/.hyperframes/engine-kokoro.mjs` | same adapter, copied | as above |
| `videos/call-forwarding-scam/.retime.mjs` | regex-rewrote `index.html` to re-time frames against real VO durations | `studio voice` (sync-durations) → `studio assemble` (deterministic assembly). Hand-regex over assembled HTML is how the caption-lane marker gets lost. |
| `videos/osi-layers-1-sideways/.hyperframes/patch-scenes.mjs` | rewrote STORYBOARD Scene blocks with re-paced windows | storyboard edits belong to the frame author; durations come from `audio.mjs sync-durations` |
| `videos/osi-layers-2-the-seam/assets/sfx/*` (one 4.5s CC BY swell) | fetched then discarded for series consistency; still on disk, unmounted, marked `superseded` in `audio_meta.json` | delete or archive before the next series pass — `studio doctor` flags unmounted assets |
| `videos/*/AGENTS.md` + `CLAUDE.md` | byte-identical init boilerplate in two template generations, re-read by every agent | project state lives in `BRIEF.md`; skills are the authority on the CLI contract |
| `.agents/skills/media-use/audio/scripts/lib/tts.mjs` | hand-patched to surface subprocess stderr (the ElevenLabs 402 was invisible as `exited with status 1`) | the patch is in the **workspace copy only**; the two user-level copies are unpatched and a `skills update` erases all three. Re-apply after any update — `studio doctor` diffs the copies and reports the drift. |

Nothing here deletes a project file. If a superseded script is removed, this table is
where the reason lives.
