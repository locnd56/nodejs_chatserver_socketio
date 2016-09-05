// //Lint javascripit(kiem tra loi trong code)
// //Compile sass file
// //Noi cac file javascript lai(nham giam tai cho server)
// //Minify va rename cac file da noi

// // Include gulp
// var gulp = require('gulp');

// // Include Our Plugins
// var sass = require('gulp-sass');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');

// guld.task('server', function(){
// 	developmentServer();
// })

// function developmentServer(){
// 	var cluster = require('cluster');
// 	if(cluster.isMaster){
// 		cluster.fork();
// 		server.run(['bin/www']);
// 		gulp.watch([
// 			'app.js',
// 			'config/*.js',
// 			'db/*.js',
// 			'lib/*.js',
// 			'routes/**/*.js',
// 			'views/**/.ejs',
// 			'bin/**/*',
// 			],function(){
// 				console.log("Restarting server...");
// 				server.run();
// 			})
// 	}else{
// 		console.log('\nserver is ready');
// 	}
// }

// // Lint Task

// // Compile Our Sass

// // Concatenate & Minify JS

// // Watch Files For Changes

// // Default Task
