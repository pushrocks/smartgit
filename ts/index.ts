/// <reference path="typings/tsd.d.ts" />
var path = require("path");
var beautylog = require("beautylog")("os");
var nodegit = require("nodegit");

var smartgit:any = {};

smartgit.clone = function(cloneURL:string = "undefined" ,dest:string = "undefined"){
    if (cloneURL == "undefined" || dest == "undefined") {
        beautylog.error("smartgit.clone".blue + " : Something is strange about the way you invoked the function");
        return;
    }

    var cloneOptions:any = {};
    cloneOptions.remoteCallbacks = {
        certificateCheck: function() { return 1; },
        credentials: function(url, userName) {
            return nodegit.Cred.sshKeyFromAgent(userName);
        }
    };
    var cloneRepository = nodegit.Clone(cloneURL, dest, cloneOptions);
    var errorAndAttemptOpen = function() {
        return nodegit.Repository.open(dest);
    };
    cloneRepository.catch(errorAndAttemptOpen)
        .then(function(repository) {
            // Access any repository methods here.
            console.log("Is the repository bare? %s", Boolean(repository.isBare()));
        });
};

smartgit.commit = function(commitMessage:string) {

};

smartgit.init = function(dest:string = "undefined") {
    if (dest == "undefined") { //lets check if a destination is defined...
        return; // ...and return function here if not
    }
    var isBare = 0; //lets create a subfolder
    nodegit.Repository.init(dest, isBare).then(function (repo) {
        // do something with repo here.
    });
};

module.exports = smartgit;
