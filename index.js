/**
 * @file gulp iconfont
 * @author junmer
 */

/* eslint-env node */

'use strict';
var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var Fontmin = require('fontmin');


function isExt(filename, ext) {
    return new RegExp('.' + ext + '$').test(filename);
}

/**
 * iconfont transform
 *
 * @param  {Object} opts opts
 * @return {stream.Transform}      iconfont transform
 */
module.exports = function (opts) {

    return through.obj(function (file, enc, cb) {

        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            cb(new gutil.PluginError('gulp-fontmin', 'Streaming not supported'));
            return;
        }

        if (!isExt(file.path, 'svg')) {

            if (opts.verbose) {
                gutil.log('gulp-fontmin: Skipping unsupported ' + chalk.blue(file.relative));
            }

            cb(null, file);
            return;
        }

        var fontmin = new Fontmin()
            .use(Fontmin.glyph(opts))
            .use(Fontmin.ttf2eot())
            .use(Fontmin.ttf2woff())
            .use(Fontmin.ttf2svg())
            .use(Fontmin.css(opts));

        if (opts.use) {
            opts.use.forEach(fontmin.use.bind(fontmin));
        }

        fontmin.run(function (err, files) {
            if (err) {
                cb(new gutil.PluginError('gulp-fontmin:', err, {fileName: file.path}));
                return;
            }

            cb(null, file);
        });

    }, function (cb) {
        gutil.log('gulp-fontmin:', 'done');
        cb();
    });
};
