/// <reference path="typings/tsd.d.ts" />
var path = require("path");
var pr = require("pushrocks");
var fs

var smartfile:any = {
    readFileToString: function(filePath) {
        var fileString;
        fileString = plugins.fs.readFileSync(filePath, "utf8");
        return fileString;
    }
};


module.exports = smartfile;
