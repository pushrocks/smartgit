/// <reference path="typings/tsd.d.ts" />
var smartgit = require("./index.js");
var beautylog = require("beautylog")("os");
var path = require("path");
smartgit.clone("https://github.com/pushrocks/cooltest.git", path.resolve("./test/"));
beautylog.success("Test successfull");
