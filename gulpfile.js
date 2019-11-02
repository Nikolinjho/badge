const gulp = require('gulp');

//include plugins

const minifyCSS = require('gulp-minify-css');

function toMinifyCss(){
    gulp.task('minify-css', function(){
        return gulp.src('./src/css/style.css')
        .pipe(minifyCSS({keepSpecialComments: 1}))
        .pipe(gulp.dest('./dist/css'))
    })
}

