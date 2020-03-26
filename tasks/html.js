// Henter gulp modulet
const gulp = require('gulp');
// Henter gulp sourcemaps modul - bruges til at lokalisere linier i minificerede filer
const sourcemaps = require('gulp-sourcemaps');
// Henter gulp-rename - bruges til at ændre navne
const rename = require('gulp-rename');
// Henter gulp-connect - gør at vi kan reloade en server
const connect = require('gulp-connect');
// Henter pug modul - bruges til templating
const pug = require('gulp-pug');

// Definerer funktion
function htmlTask() {
    //Henter kildekode fra en destination og piper det i den tilsigtede retning
    return gulp.src('src/html/*.pug')
        // Initialiserer sourcemaps i tilfælde af kode minificering
        .pipe(sourcemaps.init())
        // Parser pug filer - skal ligge før rename!
        .pipe(pug({
            //Options 
            pretty: false,
            doctype: "html"
        }))        
        // Omdøber filstruktur i forhold til pretty URL's
        .pipe(
            // Kigger på kildefiler
            rename(function(path){
                // Basename er filnavn uden filtype
                if(path.basename != "index") {
                    // Sæt mappe til filnavn
                    path.dirname = path.basename;
                    // Sæt filnavn til index
                    path.basename = "index";
                    // Sæt filtype til html
                    path.extname = ".html";
                } else {
                    // Sæt filtype til html
                    path.extname = ".html";
                }
            })
        )
        // Læg filer i mappen dist
        .pipe(gulp.dest("dist"))
        // Reloader server
        .pipe(connect.reload());

}

// Function til at overvåge med
function watchHTML() {
    // Gulp watch tager tre parametre: hvad skal overvåges, nogle options og hvad skal der ske
    return gulp.watch("src/html/*.pug", {ignoreInitial: false}, htmlTask);
}

module.exports = {
    htmlTask,
    watchHTML
}