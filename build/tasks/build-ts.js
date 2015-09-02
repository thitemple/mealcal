var gulp = require('gulp');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var paths = require('../paths');

gulp.task('build-ts', function() {
  var tsProject = ts.createProject('tsconfig.json', {
      outDir: paths.output,
      typescript: require('typescript')
  });
    
	var tsResult = gulp.src([
			paths.sourceTs,
			paths.typings
		])
		.pipe(plumber())
    .pipe(ts(tsProject));

  return tsResult.js
  	.pipe(gulp.dest(paths.output));
});
