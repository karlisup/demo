// Part I
// setting general settings
var src = './pattern-library/'
var dest = './documentation/'

// gulp general modules
var gulp = require('gulp')
var chewingum = require('chewingum')

// Pattern Library
// For each template file (e.g. breadcrumbs.twig) will build a documentation.
gulp.task('chewingum', function () {
  chewingum({
    location: {
      src: src,
      dest: dest
    }
  })
})

// Watch
gulp.task('watch', function (done) {
  gulp.watch(src + '/**/*.twig', ['chewingum'])
})

// DEFAULT
gulp.task('default', ['chewingum', 'watch'])









// Part II

// var browserSync = require('browser-sync').create()

// Server
// Will build server for patter-library
/* gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: dest
    },
    port: 9999,
    open: false,
    notify: false
  })
})*/

// DEFAULT
// gulp.task('default', ['chewingum', 'server', 'watch'])









// Part III

// for STYLE
// var sass = require('gulp-sass')
// var postcss = require('gulp-postcss')
// var autoprefixer = require('autoprefixer')

// for JavaScript
// var concat = require('gulp-concat')


// Style
// Will combine and minify all component styles
/* gulp.task('style', function (done) {
  var processors = [autoprefixer({browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']})]
  return gulp.src(src + '/style/style.scss')
    .pipe(sass({
      sourceComments: true
    }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(dest + '/assets/css/'))
    .pipe(browserSync.stream())
})*/

// JavaScript
// Will combine and minify all component JavaScript files.
// gulp.task('javascript', function (done) {
//   return gulp.src(src + '/**/*.js')
//     .pipe(concat('components.js'))
//     .pipe(gulp.dest(dest + '/assets/js/'))
// })

// DEFAULT
// gulp.task('default', ['chewingum', 'style', 'javascript', 'server', 'watch']) 


