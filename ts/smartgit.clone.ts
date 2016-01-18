/// <reference path="./index.ts" />
module SmartgitClone {
    export function init() {
        var clone = function(options){

            /***** URL Checks ******/
            if (options.from == "undefined" || options.to == "undefined") {
                plugins.beautylog.error("smartgit.clone".blue + " : Something is strange about the way you invoked the function");
                return;
            }

            /***** Path Checks ******/
            if (!/^\/.*/.test(options.to)){ //check wether path is absolute
                plugins.beautylog.error("It seems that the given path " + options.to + " is not absolute.");
                return;
            }


            plugins.beautylog.log("Now cloning " + options.from);
            var cloneOptions:any = {};
            var cloneRepository = plugins.nodegit.Clone(options.from, options.to, cloneOptions);
            smartgit.check(cloneRepository);
        };


        return clone;
    }
}