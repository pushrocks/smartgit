/// <reference path="typings/tsd.d.ts" />
var path = require("path");
var beautylog = require("beautylog")("os");
var nodegit = require("nodegit");
var smartgit = {};
smartgit.clone = function (cloneURL, dest) {
    if (cloneURL === void 0) { cloneURL = "undefined"; }
    if (dest === void 0) { dest = "undefined"; }
    if (cloneURL == "undefined" || dest == "undefined") {
        beautylog.error("smartgit.clone".blue + " : Something is strange about the way you invoked the function");
        return;
    }
    if (!/^\/.*/.test(dest)) {
        beautylog.error("It seems that the given path " + dest + " is not absolute.");
        return;
    }
    beautylog.log("Now cloning " + cloneURL);
    var cloneOptions = {};
    cloneOptions.remoteCallbacks = {
        certificateCheck: function () { return 1; },
        credentials: function (url, userName) {
            return nodegit.Cred.sshKeyFromAgent(userName);
        }
    };
    var cloneRepository = nodegit.Clone(cloneURL, dest, {});
    var errorAndAttemptOpen = function () {
        return nodegit.Repository.open(dest);
    };
    cloneRepository.catch(errorAndAttemptOpen)
        .then(function (repository) {
        // Access any repository methods here.
        console.log("Is the repository bare? %s", Boolean(repository.isBare()));
    });
};
smartgit.commit = function (commitMessage) {
};
smartgit.init = function (dest) {
    if (dest === void 0) { dest = "undefined"; }
    if (dest == "undefined") {
        return; // ...and return function here if not
    }
    var isBare = 0; //lets create a subfolder
    nodegit.Repository.init(dest, isBare).then(function (repo) {
        // do something with repo here.
    });
};
module.exports = smartgit;
