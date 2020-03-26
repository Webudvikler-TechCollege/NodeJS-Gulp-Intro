# Gulp

## Gulp er en *taskrunner* som kan bruges til at køre forskellige opgaver med. Det kan være at opsætte og klargøre en ønsket filstruktur - eller boilerplate, det kan også bruges til at compile scss filer, klargøre billeder, lave kode linting. Mulighederne er mange og i følgende guide skal vi se på nogle af dem.

___

1. Installer gulp

```
$ npm I -D gulp
```

2. Opret en filen *gulpfile.js* i roden af dit site og indsæt følgende kode.

```javascript
// Funktion til alle standard opgaver. Tager et callback som parameter (cb)
function defaultTask(cb) {
    // Indsæt kode her
    cb();
}
// Eksporterer standardfunktion
exports.default = defaultTask;
```

Indsæt script (Taskrunner)