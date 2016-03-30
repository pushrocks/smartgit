/// <reference path="./index.ts" />
var SmartgitPlugins;
(function (SmartgitPlugins) {
    SmartgitPlugins.init = function () {
        var plugins = {
            path: require("path"),
            beautylog: require("beautylog"),
            nodegit: require("nodegit"),
            Q: require("q")
        };
        return plugins;
    };
})(SmartgitPlugins || (SmartgitPlugins = {}));
/// <reference path="./index.ts" />
var SmartgitClone;
(function (SmartgitClone) {
    function init() {
        var clone = function (options) {
            /***** URL Checks ******/
            if (options.from == "undefined" || options.to == "undefined") {
                plugins.beautylog.error("smartgit.clone".blue + " : Something is strange about the way you invoked the function");
                return;
            }
            /***** Path Checks ******/
            if (!/^\/.*/.test(options.to)) {
                plugins.beautylog.error("It seems that the given path " + options.to + " is not absolute.");
                return;
            }
            plugins.beautylog.log("Now cloning " + options.from);
            var cloneOptions = {};
            var cloneRepository = plugins.nodegit.Clone(options.from, options.to, cloneOptions);
            smartgit.check(cloneRepository);
        };
        return clone;
    }
    SmartgitClone.init = init;
})(SmartgitClone || (SmartgitClone = {}));
/// <reference path="./index.ts" />
var SmartgitInit;
(function (SmartgitInit) {
    SmartgitInit.init = function () {
        var gitinit = function (dest) {
            if (dest === void 0) { dest = "undefined"; }
            if (dest == "undefined") {
                return; // ...and return function here if not
            }
            var isBare = 0; //lets create a subfolder
            plugins.nodegit.Repository.init(dest, isBare).then(function (repo) {
                // do something with repo here.
            });
        };
        return gitinit;
    };
})(SmartgitInit || (SmartgitInit = {}));
/// <reference path="./index.ts" />
var SmartgitCommit;
(function (SmartgitCommit) {
    SmartgitCommit.init = function () {
        var commit = function (pathArg, commitMessage) {
            var result = plugins.nodegit.index.addByPath(pathArg);
            if (result == 0) {
            }
        };
        return commit;
    };
})(SmartgitCommit || (SmartgitCommit = {}));
/// <reference path="./index.ts" />
var SmartgitCheck;
(function (SmartgitCheck) {
    SmartgitCheck.init = function () {
        var check = function () {
            return true;
        };
        return check;
    };
})(SmartgitCheck || (SmartgitCheck = {}));
/// <reference path="typings/tsd.d.ts" />
/// <reference path="smartgit.plugins.ts" />
/// <reference path="smartgit.clone.ts" />
/// <reference path="smartgit.init.ts" />
/// <reference path="smartgit.commit.ts" />
/// <reference path="smartgit.check.ts" />
var plugins = SmartgitPlugins.init();
//Build the smartgit object
var smartgit = {};
smartgit.clone = SmartgitClone.init();
smartgit.commit = SmartgitCommit.init();
smartgit.check = SmartgitCheck.init();
smartgit.init = SmartgitInit.init();
module.exports = smartgit;
