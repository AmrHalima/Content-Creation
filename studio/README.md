# studio — the production layer

`videos/<slug>/` is where films live. `studio/` is what makes the second, tenth and
hundredth film cheaper than the first.

Three problems made this necessary:

1. **Every project re-solved the same plumbing.** Word timings alone were written
   three times (`cue-times.mjs`, `merge-cues.mjs`, `build-word-timings.mjs`), the
   caption-lane patch was hand-added four times, and a provider-pin adapter was
   copy-pasted per project.
2. **`check` passing was treated as evidence.** Five unstyled elements, a no-op text
   tween and an ignored transform all shipped past green checks. Pixel reading found
   them; nothing automated found them until now.
3. **A single agent pass cost ~26M subagent tokens and 2+ hours and produced zero
   pixels.** The gates are cheap and deterministic; only frame authoring needs
   judgment.

---

## Commands

```bash
node studio/tools/studio.mjs doctor                     # what works on this machine, offline
node studio/tools/studio.mjs status --sync              # every project + stale-render warnings
node studio/tools/studio.mjs verify   --all             # the traps check cannot see (free)
node studio/tools/studio.mjs cues     --all             # measured word timings → both audio metas
node studio/tools/studio.mjs assemble <dir> --captions   # assembler + post-assembly patches
node studio/tools/studio.mjs voice    <dir>             # TTS with the provider pinned from BRIEF.md
node studio/tools/studio.mjs check    --all             # hyperframes check on each project's pin
node studio/tools/studio.mjs render   <dir> --quality draft --yes   # gated + verified output
node studio/tools/studio.mjs batch verify cues assemble check --all # one pass over a campaign
```

Root `package.json` shortcuts: `npm run doctor`, `npm run status`, `npm run verify`,
`npm run check:all`, `npm run gate` (verify+cues+assemble+check over everything).

Nothing here spends credits unless you pass `render` with `--yes`. `verify`, `cues`,
`assemble` and `status` are offline and free.

## The pipeline, in order

| Step | Who owns it | Cost | Gate |
|---|---|---|---|
| strategy, angle, script | `content-creator` + marketing skills | tokens | user approves the message |
| storyboard | frame author, one per project | tokens | user approves the board |
| `voice` | studio → workflow adapter → media engine | TTS quota | provider reported, never substituted |
| `cues` | studio | free | words in both metas, aligned to approved text |
| frame HTML | one worker per frame | tokens | `status: animated` |
| `assemble` | studio → skill assembler + patches | free | index.html + caption lane |
| `verify` | studio | free | 0 high findings |
| `check` | hyperframes | free | 0 errors, reviewed warnings |
| `snapshot` | human or agent eyes | free | pixels read at the moments edited |
| `render` | studio, **after approval** | credits | MP4 proven: audio stream present, audible, duration matches sources |

## Conventions studio depends on

- **One project per film.** A series gets one directory per part
  (`videos/<series>-<n>-<title>/`) and a campaign file at
  `writing/<series>/series-bible.md` that holds what the parts share. Per-part
  `BRIEF.md` frontmatter carries `series:`, `workflow:`, `language:`, `voice:`,
  `aspect:` — studio reads those instead of asking.
- **`BRIEF.md` is the no-repeat token.** Mid-run decisions get written back into it;
  it is where a later agent learns why a choice was made.
- **Registry.** `studio/registry.json` records stage, render stamp and artifacts per
  project. `studio status --sync` rebuilds it from disk, so a crash never loses state.
- **Slugs** are `[a-z0-9-]`. No absolute paths inside composition files.

## What is deliberately NOT automated

Taste. The angle, the storyboard's narrative shape, whether a joke lands, whether the
narration sounds right — a human decides those, at the brief, the board, and the
preview. `studio` only automates what was already deterministic and was being paid for
in tokens or re-work.

## Repair log

`studio/known-traps.md` — 18 documented traps with the project and session that proved
each one. Read it before authoring frames; it is the cheapest onboarding in the
workspace.
