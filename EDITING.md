# Customer Editing Guide — rajmahal-palace

This template is a traditional royal Rajasthani palace Hindu wedding invitation featuring traditional mandala artwork, Lord Ganesha invocation, couple portrait illustration, live countdown timer, wedding ceremony details, Google/Apple calendar export, and venue directions.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/rajmahal-palace/editable/wedding-data.js)

### Couple & Families
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: First names (e.g. `"Ananya"`, `"Arjun"`)
- `brideFull` & `groomFull`: Formal full names (e.g. `"Ananya Sharma"`, `"Arjun Mehta"`)
- `brideParents` & `groomParents`: Parents lineage lines
- `hashtag`: Wedding hashtag (e.g. `"#AnanyaWedsArjun"`)

### Wedding Date & Muhurat
Edit `wedding` in `editable/wedding-data.js`:
- `dateISO`: Event timestamp in ISO 8601 (`"YYYY-MM-DDTHH:MM:SS+05:30"`). Directly drives countdown timer and calendar links.
- `dateLabel`: Formatted date string (e.g. `"Sunday, 6th December 2026"`)
- `timeLabel`: Auspicious Muhurat string (e.g. `"Muhurat at 4:30 PM"`)

### Invocation & Shloka
Edit `verse` in `editable/wedding-data.js`:
- `hindi`: Sacred invocation shloka (e.g. `"॥ श्री गणेशाय नमः ॥"`)
- `text`: Warm invitation sentence

### Venue & Location
Edit `venue` in `editable/wedding-data.js`:
- `name`: Palace / Hall name (e.g. `"The Royal Orchid Palace"`)
- `address`: Detailed street address in Udaipur
- `mapsQuery`: Query passed to Google Maps navigation link

### Wedding Ceremony Details
Edit `events` array in `editable/wedding-data.js`:
- Modify ceremony event name, date, time, venue, and note.

### Imagery & Artwork
Replace files directly in `editable/assets/` or update paths in `images`:
- Couple portrait: `editable/assets/couple.png`
- Hero palace background: `editable/assets/hero-bg.png`
- Sacred motifs: `ganesha.png`, `diya.png`, `mandala.png`, `footer-garland.png`

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and swap assets in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless requested.
3. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
4. Validate changes with `node --check editable/wedding-data.js`.
