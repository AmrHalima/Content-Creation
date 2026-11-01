// Workspace paths and constants shared by every studio tool.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
export const STUDIO = join(ROOT, "studio");
export const TOOLS = join(STUDIO, "tools");
export const VIDEOS = join(ROOT, "videos");
export const WRITING = join(ROOT, "writing");
export const DESIGN_SPEC = join(ROOT, ".agents", "design.md");
export const REGISTRY = join(STUDIO, "registry.json");
export const ENV_FILE = join(ROOT, ".env");

// Skill scripts are vendored in three places (workspace, ~/.qoder, ~/.agents).
// They are kept in sync by the installer, but a hand-patch to one copy is lost
// on the next `skills update`, so studio resolves them lazily and reports which
// copy it used.
export const SKILL_ROOTS = [
  join(ROOT, ".agents", "skills"),
  join(homedir(), ".qoder", "skills"),
  join(homedir(), ".agents", "skills"),
];

export function firstExisting(paths) {
  for (const p of paths) if (existsSync(p)) return p;
  return null;
}

export function skillScript(skill, file) {
  const p = firstExisting(SKILL_ROOTS.map((r) => join(r, skill, "scripts", file)));
  if (!p) throw new Error(`skill script not found: ${skill}/scripts/${file} (searched ${SKILL_ROOTS.join(", ")})`);
  return p;
}

export function projectPin(projectDir) {
  const pkg = join(projectDir, "package.json");
  if (!existsSync(pkg)) return null;
  const m = readFileSync(pkg, "utf8").match(/hyperframes@(\d+\.\d+\.\d+)/);
  return m ? m[1] : null;
}

// npm/npx are .cmd shims on Windows and spawning the shim directly throws EINVAL.
// Resolve npx's real JS entry point and run it through node; fall back to the
// shim with a shell.
let npxCmd;
export function npx() {
  if (npxCmd) return npxCmd;
  const candidates = [
    join(dirname(process.execPath), "node_modules", "npm", "bin", "npx-cli.js"),
    join(dirname(process.execPath), "node_modules", "npm", "bin", "npx"),
  ];
  const cli = candidates.find((p) => existsSync(p));
  npxCmd = cli ? { cmd: process.execPath, base: [cli] } : { cmd: "npx", base: [], shell: true };
  return npxCmd;
}

export function runNpx(args, opts = {}) {
  const { cmd, base, shell } = npx();
  return spawnSync(cmd, [...base, ...args], { encoding: "utf8", shell: !!shell, ...opts });
}

export function hfArgs(projectDir, ...args) {
  const pin = projectPin(projectDir);
  return ["--yes", `hyperframes@${pin || process.env.STUDIO_HF_VERSION || "latest"}`, ...args];
}

export function loadEnv() {
  // The root .env is the only credential file. The media engine also walks up
  // from each project, but tools outside that path need it read directly.
  const out = {};
  if (!existsSync(ENV_FILE)) return out;
  for (const raw of readFileSync(ENV_FILE, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq < 1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (/^["'].*["']$/.test(val)) val = val.slice(1, -1);
    if (!(key in process.env)) out[key] = val;
  }
  return out;
}

export const VOICE_DEFAULTS = {
  en: { provider: "kokoro", voice: "am_michael", speed: 0.74 },
  ar: { provider: "gemini", voice: "Kore", speed: 1.0 },
};

// `if (isMain(import.meta)) { ... }` — Windows-safe entry check (a bare
// `file://` + argv[1] compare silently no-ops on relative paths).
export function isMain(metaUrl, argvPath = process.argv[1]) {
  if (typeof argvPath !== "string") return false;
  return metaUrl === pathToFileURL(resolve(argvPath)).href;
}
