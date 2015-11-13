/// <reference path="typings/tsd.d.ts" />
/// <reference path="smartgit.clone.ts" />
/// <reference path="smartgit.init.ts" />
/// <reference path="smartgit.commit.ts" />

var plugins = {
    path: require("path"),
    beautylog: require("beautylog")("os"),
    nodegit: require("nodegit"),
    Q: require("q")
};


var smartgit:any = {};

smartgit.clone = SmartgitClone

smartgit.commit = function(pathArg:string,commitMessage:string) {
    var result = plugins.nodegit.index.addByPath(pathArg);
    if (result == 0) {

    }
};

smartgit.init = function(dest:string = "undefined") {
    if (dest == "undefined") { //lets check if a destination is defined...
        return; // ...and return function here if not
    }
    var isBare = 0; //lets create a subfolder
    plugins.nodegit.Repository.init(dest, isBare).then(function (repo) {
        // do something with repo here.
    });
};

smartgit.check = function(repository) {
    return true;
};


module.exports = smartgit;
