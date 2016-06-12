import "typings-global"
import plugins = require("./smartgit.plugins");
import SmartgitCheck = require("./smartgit.check");

export let clone = (options:{from:string,to:string}) => {
    let done = plugins.Q.defer();
    /***** URL Checks ******/
    //TODO make smartstring URL test

    /***** Path Checks ******/
    if (!/^\/.*/.test(options.to)){ //check wether path is absolute
        plugins.beautylog.error("It seems that the given path " + options.to + " is not absolute.");
        return;
    }

    plugins.beautylog.log("Now cloning " + options.from);
    var cloneOptions:any = {
        fetchOpts: {
            callbacks: {
                certificateCheck: function() { return 1; },
                credentials: function(url, userName) {
                    return plugins.nodegit.Cred.sshKeyFromAgent(userName);
                }
            }
        }
    };
    var cloneRepository = plugins.nodegit.Clone.clone(options.from, options.to, cloneOptions)
        .then(() => {
            SmartgitCheck(cloneRepository);
            done.resolve();
        });
    return done.promise;
};