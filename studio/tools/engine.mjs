// Provider-pinned media audio engine — one shared copy for the whole workspace.
//
// Set it as $HF_MEDIA_ENGINE (studio voice does this for you) and the workflow's
// audio adapter calls through here instead of the default engine:
//
//   HF_MEDIA_ENGINE=<workspace>/studio/tools/engine.mjs \
//   STUDIO_PROVIDER=gemini STUDIO_VOICE=Kore node <skill>/scripts/audio.mjs …
//
// Why it exists: the engine's auto cascade is heygen → elevenlabs → kokoro, so
// "auto" silently picks a provider that cannot speak the voice id you asked for
// (Kokoro has no Arabic; a free-tier ElevenLabs key rejects library voices with
// HTTP 402). The workflow's own audio adapter hard-codes "provider": "auto" and
// forwards no --provider flag, so pinning the engine is the only supported lever.
// Previously every project kept its own copy of this adapter.

import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DEFAULT_ENGINE = resolve(HERE, "..", "..", ".agents", "skills", "media-use", "audio", "scripts", "audio.mjs");
const engine = process.env.HF_MEDIA_ENGINE_REAL || (existsSync(DEFAULT_ENGINE) ? DEFAULT_ENGINE : null);
if (!engine) {
  console.error(`engine.mjs: media audio engine not found at ${DEFAULT_ENGINE} — set HF_MEDIA_ENGINE_REAL`);
  process.exit(1);
}

const provider = process.env.STUDIO_PROVIDER;
if (provider && provider !== "auto") {
  process.argv.push("--provider", provider);
  console.log(`[studio engine] provider pinned: ${provider}`);
}
// The engine's flags beat the request JSON, which is what lets a shared adapter
// carry per-language choices the workflow's own audio.mjs does not forward.
for (const [env, flag] of [
  ["STUDIO_LANG", "--lang"],
  ["STUDIO_VOICE", "--voice"],
  ["STUDIO_SPEED", "--speed"],
  ["STUDIO_TTS_MODEL", "--tts-model"],
]) {
  if (process.env[env]) process.argv.push(flag, process.env[env]);
}

await import(pathToFileURL(engine).href);
