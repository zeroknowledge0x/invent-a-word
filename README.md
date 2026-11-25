# miswave - a word we need

[![make.fun · u-deranalabs-invent-a-word-we-need-17a020e0](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/zeroknowledge0x/invent-a-word/rank.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/zeroknowledge0x/invent-a-word/reward.svg)](https://make.fun/bounty/u-deranalabs-invent-a-word-we-need-17a020e0?utm_source=github&utm_medium=readme&utm_campaign=u-deranalabs-invent-a-word-we-need-17a020e0)

> **miswave** — the wave you fire back at a stranger before you notice they
> were greeting the person behind you.

The moment is universal but had no name: you wave at someone already waving,
then clock out of the corner of your eye that the smile was over your shoulder.
"mis-" carries the mistake, "wave" the reflex; the short definition lets the
whole scene land in one reading, and the ending on the person behind you is
the small turn that makes the word memorable. This entry is original work
built for the bounty.

## Files

- `main.ts` - emits the fixed entry to `/output/entry.txt` using only the Node
  standard library. Deterministic: no clock, no random source, no network.
- `LICENSE` - MIT.

## Rebuild and check locally

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out /opt/data/node22/bin/node --experimental-strip-types main.ts
cat out/entry.txt && wc -m out/entry.txt
```

The grader runs `main.ts` twice into fresh output directories and requires
byte-identical text of 1 to 140 characters. The program guards the count and
fails loudly rather than writing an invalid entry. MIT licensed.
