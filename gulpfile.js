/*
安裝指令
yarn add gulp
yarn add gulp-uglify
yarn add gulp-minify-css
yarn add gulp-uglify-es
yarn add gulp-concat
yarn add gulp-rename
*/
var RootPath = 'js/';

var baseJsList = [
	RootPath + 'main/jquery-3.6.0.min.js',
	RootPath + 'main/zzjtnb.base.js',
	RootPath + 'main/zzjtnb.Class.js',
	RootPath + 'main/zzjtnb.Event.js',
	RootPath + 'main/zzjtnb.util.js',
	RootPath + 'main/zzjtnb.Tip.js',
];
baseJsList.concatName = 'base-all.js'; //输出文件名称
baseJsList.distPath = 'js/'; //输出文件目录

var gulp = require('gulp'),
	//minifyHTML = require('gulp-minify-html'),
	minifycss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	del = require('del');

//压缩合并css
gulp.task('minifyBaseCss', function () {
	return (
		gulp
			.src('css/common/base.css') //文件源
			.pipe(minifycss()) //执行压缩
			//.pipe(concat("main.css"))//执行合并
			.pipe(rename({ suffix: '.min' })) //重命名
			.pipe(gulp.dest('css/'))
	); //输出文件夹
});

//压缩合并js
gulp.task('minifyBaseJs', function () {
	return gulp
		.src(baseJsList)
		.pipe(concat(baseJsList.concatName)) //合并所有js到base-all.js
		.pipe(gulp.dest(baseJsList.distPath)) //输出base-all.js到文件夹
		.pipe(rename({ suffix: '.min' })) //rename压缩后的文件名
		.pipe(uglify()) //压缩
		.pipe(gulp.dest(baseJsList.distPath)); //输出
});

gulp.task('build', gulp.series('minifyBaseCss', 'minifyBaseJs'));
