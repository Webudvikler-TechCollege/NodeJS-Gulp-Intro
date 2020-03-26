// Henter Gulp modul
const gulp = require('gulp');
// Henter Gulp Sass modul
const sass = require('gulp-sass');
// Henter Gulp Connect modul
const connect = require('gulp-connect');
// Henter gulp sourcemaps modul - bruges til at lokalisere linier i minificerede filer
const sourcemaps = require('gulp-sourcemaps');
// Henter Gulp Concat
const concat = require('gulp-concat');
// Henter Gulp Clean CSS - sørger for browser kombaltibilitet
const clean = require('gulp-clean-css');

// Definerer funktion
function sassTask() {
    //Henter kildekode fra en destination og piper det i den tilsigtede retning    
    return gulp.src('src/scss/*.scss')
        // Initialiserer sourcemaps i tilfælde af kode minificering
        .pipe(sourcemaps.init())
        // Compiler scss - returnerer fejlmeddelelse if any
        .pipe(sass().on("error", sass.logError))
        // Concatter alle comppilede css filer til een bundle
        .pipe(concat("style-bundle.css"))
        // Skriver sourcemaps
        .pipe(sourcemaps.write())
        // Minifier CSS        
        .pipe(clean())
        // Gemmer fil i dist mappe
        .pipe(gulp.dest('dist/assets/css'))
        // Reloader server
        .pipe(connect.reload())
}

// Function til at overvåge med
function watchSCSS() {
    // Gulp watch tager tre parametre: hvad skal overvåges, nogle options og hvad skal der ske
    return gulp.watch("src/scss/*.scss", {ignoreInitial: false}, sassTask);
}

// Eksporterer funktioner
module.exports = {
    sassTask,
    watchSCSS
}