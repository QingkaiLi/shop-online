var gulp = require('gulp');
var gulpServer = require('gulp-live-server');

var paths = [
    {dest_css: 'public/stylesheets'},
    {dest_js: 'public/javascripts'}
];

gulp.task('server', function() {
    var server = gulpServer.new('./bin/www');
    server.start();
});

gulp.task('default', ['server'], function() {
    gulp.watch('public/stylesheets/*.js');
    gulp.watch('public/stylesheets/*.css');
    gulp.watch('views/*.ejs');
});