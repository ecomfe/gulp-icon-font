# gulp-icon-font 

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][downloads-image]][npm-url]
[![Dependencies][dep-image]][dep-url]

[downloads-image]: http://img.shields.io/npm/dm/gulp-icon-font.svg
[npm-url]: https://npmjs.org/package/gulp-icon-font
[npm-image]: http://img.shields.io/npm/v/gulp-icon-font.svg

[travis-url]: https://travis-ci.org/ecomfe/gulp-icon-font
[travis-image]: http://img.shields.io/travis/ecomfe/gulp-icon-font.svg

[dep-url]: https://david-dm.org/ecomfe/gulp-icon-font
[dep-image]: http://img.shields.io/david/ecomfe/gulp-icon-font.svg


> Gulp plugin for generate iconfont (TTF, SVG, EOT, WOFF) from svgs with [fontmin](https://github.com/ecomfe/fontmin)

## Install

```
$ npm install --save-dev gulp-icon-font
```

## Usage

```js
var gulp = require('gulp');
var iconfont = require('gulp-icon-font');

gulp.task('default', function () {
    return gulp.src('src/svg/*.svg')
        .pipe(iconfont('font-food'))
        .pipe(gulp.dest('dist/fonts'));
});
```

## API

### iconfont(fontName[, options])

Options:

* `fontName`: string name of font 
* `options`: fontmin options
    * `adjust`: adjust info object
        * `leftSideBearing`:
        * `rightSideBearing`:
        * `ajdustToEmBox`:
        * `ajdustToEmPadding`:
    * `startCode`:

## MORE

> more config

```js
var gulp = require('gulp');
var iconfont = require('gulp-icon-font');

gulp.task('default', function () {
    return gulp.src('src/svg/*.svg')
        .pipe(
            iconfont('font-food', {
                adjust: {
                    leftSideBearing: 0,
                    rightSideBearing: 0,
                    ajdustToEmBox: true,
                    ajdustToEmPadding: 0
                },
                startCode: 0xe001
            })
        )
        .pipe(gulp.dest('dist/fonts'));
});
```

## Related

- [fontmin](https://github.com/ecomfe/fontmin)
- [fontmin-app](https://github.com/ecomfe/fontmin-app)

## License

MIT
