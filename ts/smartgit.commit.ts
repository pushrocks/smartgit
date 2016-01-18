/// <reference path="./index.ts" />
module SmartgitCommit {
    export var init = function() {
        var commit = function(pathArg:string,commitMessage:string) {
            var result = plugins.nodegit.index.addByPath(pathArg);
            if (result == 0) {

            }
        };
        return commit;
    }
}