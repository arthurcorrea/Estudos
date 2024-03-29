const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', erro => console.log(erro))
        .pipe(concat('code.min.js'))
        .pipe(gulp.dest('build'))

    return callback()
}

exports.default = series(padrao)
