// Henter gulp modulet
const gulp = require('gulp');
// Henter gulp sourcemaps modul - bruges til at lokalisere linier i minificerede filer
const sourcemaps = require('gulp-sourcemaps');
// Henter gulp-rename - bruges til at ændre navne
const rename = require('gulp-rename');
// Henter gulp-connect - gør at vi kan reloade en server
const connect = require('gulp-connect');


function defaultTask(done) {
    //Kører noget kode fra start og piper det derefter i forskellige retninger
    gulp.src('src/html/**/*.html')
        // Initialiserer sourcemaps i tilfælde af kode minificering
        .pipe(sourcemaps.init())
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
        .pipe(gulp.dest("dist"));

        // Selvstændig funktion til at starte server på port 8080
        connect.server({
            livereload: true,
            root: "dist"
        });

    done();
}

// Eksporterer function defaultTask som default
exports.default = defaultTask;