var rename = require("gulp-rename");
var gulp = require('gulp');
var webpack = require('webpack');
var exec = require('gulp-exec');
var gulpSequence = require('gulp-sequence')

gulp.task('webpack-build', function(done){
    var config = require('./config/webpack.prod.config.js');
   webpack(config).run(onBuild(done));
});

gulp.task('rename', function(done){

  return gulp.src("./build/js/custom/main.js")
    .pipe(rename(`${process.env.NODE_PROJECT}.js`))
    .pipe(gulp.dest("./build/js/custom/"));

});


function onBuild(done) {
    return function(err, stats) {
     // console.log(err, stats)
    }
}

gulp.task('build', gulpSequence(['webpack-build'], 'rename'))
