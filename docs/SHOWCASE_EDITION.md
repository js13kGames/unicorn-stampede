# Unicorn Stampede editions

## Competition artifact

`release/js13k-2026-submitted` is the frozen source lineage for the submitted JS13k build. It should remain byte-focused and immutable except for documentation that does not change the game artifact.

The submitted package was qualified at 13,307 / 13,312 bytes.

## Showcase edition

`main` is the post-JS13k edition intended for sidhulyalkar.com and continued development. It is no longer constrained by the 13 KB cap.

The showcase edition starts from the rich three-world lineage and preserves the competition game's core loop while restoring visual and engineering headroom:

- Prismborough, Washwater Bay, and Cloudtop Heights all remain playable.
- Rich procedural building facades, windows, awnings, street furniture, and scenery remain enabled.
- World-specific showcase rendering makes each region legible without relying on labels alone.
- Civilians have readable animated bodies, arms, and legs.
- The Cloudtop collision retarget prevents AI unicorns from repeatedly reacquiring the same blocked building center.
- Menu clicks are guarded against duplicate rapid-click activation while gameplay clicks remain unrestricted.
- Chromium and Firefox are exercised in CI.

## Product direction

The website edition should optimize for the strongest playable demonstration, not compressed bytes. Future work can add richer simulation, adaptive audio, accessibility, controller/touch input, replay telemetry, and region-specific systems without modifying the frozen competition branch.
