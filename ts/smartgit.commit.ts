import plugins = require("./smartgit.plugins");

export = function(pathArg:string,commitMessage:string) {
    let done = plugins.Q.defer();
    done.resolve();
    return done.promise;
};