# TED — TransitCenter Equity Dashboard

Static site for [dashboard.transitcenter.org](https://dashboard.transitcenter.org), built with
[Eleventy](https://www.11ty.dev/) and Tailwind CSS and deployed to GitHub Pages on every push to `main`.

The map uses Mapbox vector tilesets, and the charts read the summary CSVs in `src/data/summary/`.
The larger download files (scores, demographic dots, transit lines) are hosted separately in
[`transitcenter/ted-files`](https://github.com/transitcenter/ted-files).

## Develop

```bash
npm install
npm start        # http://localhost:8080, rebuilds on change
npm run build    # writes the site to _site/
```

## Common updates

| To change… | Edit |
|---|---|
| Alerts (nav badge + changelog page) | `src/_data/alerts.yaml` |
| Version history | `src/_data/changelog.yaml`, and `version` in `src/_data/site.yaml` |
| Publications, media, industry and academic references | `src/_data/references.yaml` |
| Add a new data date | Add it to the top of `dateList` in `src/assets/js/config.js` (the first entry is the default), add the summary CSVs to `src/data/summary/`, and upload score files to `ted-files` |
| Regions, fare years, where download files live | `src/assets/js/config.js` |
| Map colour breaks, labels, demographic colours | `src/assets/js/styles.js` |

The YAML files can be edited directly in the GitHub web interface; the site redeploys automatically.

## Layout

```
src/
  _data/        site settings and page content (YAML)
  _includes/    base layout and nav
  assets/       css, js, img
  data/summary/ summary CSVs used by the charts page
  *.njk         one file per page
```
