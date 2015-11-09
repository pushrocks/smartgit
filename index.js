/// <reference path="typings/tsd.d.ts" />
var through = require("through2");
var path = require("path");
module.exports = function (jadeTemplate, mojo) {
    if (mojo === void 0) { mojo = undefined; }
    return through.obj(function (file, enc, cb) {
        //run callback function to signal end of plugin process.
        return cb(null, file);
    });
};
