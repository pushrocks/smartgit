/// <reference path="./index.ts" />
module SmartgitInit {
    export var init = function(){
        var gitinit = function(dest:string = "undefined") {
            if (dest == "undefined") { //lets check if a destination is defined...
                return; // ...and return function here if not
            }
            var isBare = 0; //lets create a subfolder
            plugins.nodegit.Repository.init(dest, isBare).then(function (repo) {
                // do something with repo here.
            });
        };
        return gitinit;
    }
}