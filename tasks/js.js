// Henter Gulp modul
const gulp = require('gulp');
// Henter Gulp Connect modul
const connect = require('gulp-connect');
// Henter gulp sourcemaps modul - bruges til at lokalisere linier i minificerede filer
const sourcemaps = require('gulp-sourcemaps');
// Henter gulp babel - bruges til at konveretere moderne javascript til ældre browsere
const babel = require('gulp-babel');
// Henter gulp uglify - minificerer javascript
const uglify = require('gulp-uglify');

// Definerer funktion
function jsTask() {
    //Henter kildekode fra en destination og piper det i den tilsigtede retning
    return gulp.src("src/js/*.js")
        // Initialiserer sourcemaps i tilfælde af kode minificering
        .pipe(sourcemaps.init())
        // Kører babel        
        .pipe(babel({ presets: ["@babel/env"] }))
        // Uglyfier koder
        .pipe(uglify())
        // Gemmer fil i dist mappe
        .pipe(gulp.dest("dist/assets/js"))
        // Reloader server
        .pipe(connect.reload());
}

// Function til at overvåge med
function watchJS() {
    // Gulp watch tager tre parametre: hvad skal overvåges, nogle options og hvad skal der ske
    return gulp.watch("src/js/**/*.js", {ignoreInitial: false}, jsTask);
}

// Eksporterer funktioner
module.exports = {
    jsTask,
    watchJS
}