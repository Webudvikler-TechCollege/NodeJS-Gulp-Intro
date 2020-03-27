// Henter Gulp modul
const gulp = require('gulp');
// Henter Gulp Connect modul
const connect = require('gulp-connect');
// Henter gulp imagemin
const imagemin = require('gulp-imagemin');
// Henter gulp imagemin-jpeg-recompress
const recompress = require('imagemin-jpeg-recompress');

// Definerer funktion
function imageTask() {
    //Henter billeder fra en destination og piper det i den tilsigtede retning
    return gulp.src("src/images/*")
        // 
        .pipe(imagemin([
            //imagemin.jpegtran({ progressive: true }),
            recompress({
                min: 40,
                max: 90,
                target: 0.5
            })
        ]

        ))
        // Gemmer fil i dist mappe
        .pipe(gulp.dest("dist/assets/images"))
        // Reloader server
        .pipe(connect.reload());
}

// Function til at overvåge med
function watchImages() {
    // Gulp watch tager tre parametre: hvad skal overvåges, nogle options og hvad skal der ske
    return gulp.watch("src/images/*", {ignoreInitial: false}, imageTask);
}

// Eksporterer funktioner
module.exports = {
    imageTask,
    watchImages
}