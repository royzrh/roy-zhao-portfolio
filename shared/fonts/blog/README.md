# Blog body fonts

These fonts are served by this website; no system-installed fonts or external
font service is required.

- Charter Regular is the default Latin face, with genuine italic and bold faces
  for Markdown emphasis. Webfont distribution: https://practicaltypography.com/charter.html
  See `Charter-LICENSE.txt` for the Bitstream permission notice.
- Chinese uses the Light (300) outlines from Adobe Source Han Serif CN:
  https://github.com/adobe-fonts/source-han-serif/tree/release/SubsetOTF/CN
  The font is split into WOFF2 Unicode subsets, retaining the complete original
  character coverage. Common characters share one subset; uncommon characters
  load on demand. Subset internal names are changed to Roy Blog Han Serif.
  See `SourceHanSerif-LICENSE.txt` for the SIL Open Font License.

The body style requests Charter at 400; Chinese glyphs fall back to the real
Light face at 300. Article titles, section headings, code and mathematical
typesetting keep their existing font rules.
