/// <reference path="typings/tsd.d.ts" />
var smartgit = require("./index.js");
var beautylog = require("beautylog");
var path = require("path");
smartgit.clone({
    from: "https://github.com/pushrocks/docs.git",
    to: path.resolve("./test/temp/")
});
beautylog.success("Test successfull");
