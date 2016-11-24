'use strict';
let gulp = require('gulp');
let ts = require('gulp-typescript');
let del = require('del');
let nodemon = require('nodemon');
let path = require('path');
let gulpJasmine = require('gulp-jasmine');

gulp.task('clean', () => {
    return del(['build']);
});

gulp.task('build', ['clean'], () => {
    let project = ts.createProject('tsconfig.json', {typescript: require('typescript')});

    return project.src()
        .pipe(project())
        .js.pipe(gulp.dest("build"));
});

gulp.task('start', ['build'], () => {
    nodemon({
        execMap: {
            js: 'node'
        },
        script: path.resolve(__dirname, 'build'),
        ignore: ['*']
    });
});

gulp.task('start:debug', ['start'], () => {
    gulp.watch(['./source/**/*.ts'], ['restart']);
});

gulp.task('restart', ['build'], () => {
    nodemon.restart();
});

gulp.task('test', ['build'], () => {
    return gulp.src('./build/**/*.spec.js')
        .pipe(gulpJasmine());
});

gulp.task('test:debug', ['test'], () => {
    gulp.watch(['./source/**/*.ts'], ['test']);
});