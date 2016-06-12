import "typings-global"
import plugins = require("./smartgit.plugins");

export = function(){
    var gitinit = function(dest:string = "undefined") {
        if (dest == "undefined") { //lets check if a destination is defined...
            return; // ...and return function here if not
        }
        var isBare = 0; //lets create a subfolder
        plugins.nodegit.Repository.init(dest, isBare).then(function (repo) {
            // do something with repo here.
        });
    };
}