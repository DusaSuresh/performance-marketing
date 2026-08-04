# Change ledger

## 003 — Compact section rhythm

- Reduced standard section padding from `125px` to `82px` on desktop and from `82px` to `60px` on mobile.
- Reduced footer separation from `125px` to `82px`.
- Marker: `[C-003]` in `src/styles.css`.

## 004 — Advertising concepts ticker

- Added an animated, decorative concepts ticker directly after the hero.
- Its labels are maintained in `src/data/website.json` under `ticker.items`.
- Marker: `[C-004]` in `src/styles.css`; component: `ConceptTicker`.

To roll back a numbered change, remove its marked CSS rule(s) and the named component usage, or restore the corresponding file revision in Git.

## 005 — Hero signal field (replaces 004)

- Removed the foreground concepts ticker from change 004.
- Added ambient star, orbit, and lead-generation signal-node visuals behind the hero content.
- Node labels are maintained in `src/data/website.json` under `ambient.nodes`.
- Marker: `[C-005]` in `src/styles.css`.

## 006 — Site-wide ambient field and type refinement

- Extended subtle star points and moving orbit lines to every standard section, rather than only the hero.
- Reduced headline, card, quote, and supporting-copy sizes; shifted key headings and controls from heavy bold to semibold for a more balanced hierarchy.
- Marker: `[C-006]` in `src/styles.css`.

## 007 — Lower-section visual continuity

- Extended the hero’s cyan/violet constellation language to lower section surfaces, cards, lists, accordions, and feature panels.
- Added subtle heading rules, translucent surfaces, and controlled glow so the treatment is consistently visible while scrolling.
- Marker: `[C-007]` in `src/styles.css`.

## 008 — Animated constellation field and numeric hierarchy

- Increased section/card/tile/accordion numbers so they act as clearer visual anchors.
- Changed the lower-section backgrounds from subtle static decoration to continuously drifting star fields, pulsing glow rings, and alternating orbit colors.
- Marker: `[C-008]` in `src/styles.css`.

## 009 — Solutions numeric anchors and dot field

- Enlarged the 01/02/03 markers in the “Performance systems that earn their keep” cards with a cyan-to-violet gradient treatment.
- Added a denser, independently drifting dot field and orbit accents behind that section; existing motion rules were not modified.
- Marker: `[C-009]` in `src/styles.css`.

## 010 — Shared animated dot-field treatment

- Applied the successful Solutions dot field, active orbit glow, and card-corner ring language to every lower-page section.
- The original Solutions-specific rule remains intact; this change provides the common visual system for the rest of the page.
- Marker: `[C-010]` in `src/styles.css`.

## 011 — Compact cards and section spacing

- Reduced standard desktop section padding to 64px and mobile padding to 48px.
- Reduced card minimum heights, padding, grid gaps, panel padding, and supporting spacing throughout the page.
- Motion and background animation settings are unchanged.
- Marker: `[C-011]` in `src/styles.css`.

## 012 — Contact surface and process-step clarity

- Replaced the heavy contact-panel fill with a lighter shared-surface treatment, a glass form, and three JSON-driven inquiry details.
- Separated the operating-model step number from its Align/Test/Scale label to prevent text-number collisions.
- Marker: `[C-012]` in `src/styles.css`.
