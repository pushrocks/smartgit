/// <reference path="./index.ts" />
module SmartgitClone {
    export function init() {
        var clone = function(cloneURL:string = "undefined" ,dest:string = "undefined"){

            /***** URL Checks ******/
            if (cloneURL == "undefined" || dest == "undefined") {
                plugins.beautylog.error("smartgit.clone".blue + " : Something is strange about the way you invoked the function");
                return;
            }

            /***** Path Checks ******/
            if (!/^\/.*/.test(dest)){ //check wether path is absolute
                plugins.beautylog.error("It seems that the given path " + dest + " is not absolute.");
                return;
            }


            plugins.beautylog.log("Now cloning " + cloneURL);
            var cloneOptions:any = {};
            cloneOptions.remoteCallbacks = {
                certificateCheck: function() { return 1; },
                credentials: function(url, userName) {
                    return plugins.nodegit.Cred.sshKeyFromAgent(userName);
                }
            };
            var cloneRepository = plugins.nodegit.Clone(cloneURL, dest, cloneOptions);
            smartgit.check(cloneRepository);
        };


        return clone;
    }
}