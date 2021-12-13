const { src, dest, watch, parallel } = require("gulp"); //ejecutar gulp en series o de forma paralela o escuchar constantemente...
//css
const sass = require("gulp-sass")(require("sass")); //Nos permite usar sass, para generar el css
const plumber = require("gulp-plumber"); //nos permite que la app siga funcionnado en caso de un fallo
//img
const cache = require("gulp-cache"); //nos permite mantener las img en cache
const webp = require("gulp-webp"); //convertimos las imagenes en webp mas responsive,pesan menos...
const imagemin = require('gulp-imagemin'); //nos permite optimizar las imagenes
const avif = require("gulp-avif"); //nos permite aligerar las imgs, son mas ligeras que webp

function css(done) {
    src("./sass/*.scss") //identificar archivo .scss
        .pipe(plumber()) //te permite que al tener un error no se detenga la app
        .pipe(sass()) //compilarlo
        .pipe(dest("./build/css")); //almacenarlo en el disco duro
    done();
}

function optimizarImagenes(done) {
    const opciones = {
        optimizationLevel: 3,
    };
    src("img/*.{png,jpg}")
        .pipe(cache(imagemin(opciones)))
        .pipe(dest("./build/img"));
    done();
}

function versionAvif(done) {
    const opciones = {
        quality: 50,
    };
    src("img/**/*.{png,jpg}").pipe(avif(opciones)).pipe(dest("./build/img"));
    done();
}

function versionWebp(done) {
    const opciones = {
        quality: 50,
    };
    src("img/*.{png,jpg}").pipe(webp(opciones)).pipe(dest("./build/img"));
    done();
}

function dev(done) {
    watch("sass/*.scss", css);
    done();
}

exports.css = css;
exports.optimizarImagenes = optimizarImagenes;
exports.versionAvif = versionAvif;
exports.versionWebp = versionWebp;
exports.dev = parallel(optimizarImagenes, versionWebp, versionAvif, dev);
//optimizarImagenes, versionWebp, versionAvif,