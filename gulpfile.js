// Henter gulp-connect - gør at vi kan reloade en server
const connect = require('gulp-connect');
// Henter tasks funktioner
const { watchHTML, htmlTask } = require("./tasks/html");
const { watchSCSS, sassTask } = require("./tasks/scss");
const { watchJS, jsTask } = require("./tasks/js");
const { watchImages, imageTask } = require("./tasks/images");

function watch(done) {
    watchHTML();
    watchSCSS();
    watchJS();
    watchImages();

    // Funktion til at starte server på port 8080
    connect.server({
        livereload: true,
        root: "dist"
    });

    done();
}

// Funktion til at builde med
function build(done) {
    htmlTask();
    sassTask(),
    jsTask(),
    imageTask(),
    done();
}

// Eksporterer function watch som default
exports.default = watch;
// Eksporterer build funktion
exports.build = build;