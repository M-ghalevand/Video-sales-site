const gulp =require('gulp');
const pug = require('gulp-pug');
const htmlnano = require('gulp-htmlnano');
const options = {removeComments: false};
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// compile pug to html
gulp.task('pug-compile', async function (){
    gulp.src('src/assets/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('src/'));
});

//html minify to min
gulp.task('html-minify', async function (){
    gulp.src('src/*.html')
        .pipe(htmlnano(options))
        .pipe(gulp.dest('dist/'));
});

//html copy to dist
gulp.task('html-copy', async function (){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'));
});

//font copy to dist
gulp.task('font-copy', async function (){
    gulp.src('src/assets/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts/'));
});

//compile scss to css
gulp.task('scss-compile',async function () {
    gulp.src('src/assets/scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('src/assets/css/'));
});

//css minify
gulp.task('css-minify',async function () {
    gulp.src('src/assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/assets/css/'));
});

//css minify concat
gulp.task('css-minify-concat',async function () {
    gulp.src('src/assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest('dist/assets/css/'));
});

//images minify
gulp.task('img-minify', async function (){
    gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images/'))
});

//js minify
gulp.task('js-minify',async function () {
    gulp.src('src/assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js/'))
});

//js minify concat
gulp.task('js-minify-concat',async function () {
        gulp.src('src/assets/js/*.js')
            .pipe(concat('app.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/assets/js/'))
});

//copy task ranner gulp
gulp.task('copy' , gulp.parallel('pug-compile' , 'html-copy' , 'font-copy' ,'scss-compile' , 'css-minify' , 'img-minify' , 'js-minify'));

//minify concat task ranner gulp
gulp.task('minify-concat' , gulp.parallel('pug-compile' , 'html-minify' , 'font-copy' ,'scss-compile' , 'css-minify-concat' , 'img-minify' , 'js-minify-concat'));

//watch copy task ranner gulp
gulp.task('watch-copy',async function (){
    gulp.watch('src/assets/pug/' , gulp.series('pug-compile'));
    gulp.watch('src/' , gulp.series('html-copy'));
    gulp.watch('src/assets/fonts/' , gulp.series('font-copy'));
    gulp.watch('src/assets/scss/' , gulp.series('scss-compile'));
    gulp.watch('src/assets/css/' , gulp.series('css-minify'));
    gulp.watch('src/assets/images/' , gulp.series('img-minify'));
    gulp.watch('src/assets/js/' , gulp.series('js-minify'));
})

//watch minify concat task ranner gulp
gulp.task('watch-minify-concat',async function (){
    // gulp.watch('src/assets/pug/' , gulp.series('pug-compile'));
    gulp.watch('src/' , gulp.series('html-minify'));
    gulp.watch('src/assets/fonts/' , gulp.series('font-copy'));
    gulp.watch('src/assets/scss/' , gulp.series('scss-compile'));
    gulp.watch('src/assets/css/' , gulp.series('css-minify'));
    gulp.watch('src/assets/images/' , gulp.series('img-minify'));
    gulp.watch('src/assets/js/' , gulp.series('js-minify'));
})