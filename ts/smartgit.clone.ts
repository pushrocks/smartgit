import "typings-global"
import plugins = require("./smartgit.plugins");
import SmartgitCheck = require("./smartgit.check");

export let clone = (optionsArg:{
        from:string,
        to:string,
        keyPath?:string,
        keyPassphrase?:string
    }) => {
    let done = plugins.Q.defer();
    /***** URL Checks ******/
    //TODO make smartstring URL test

    /***** Path Checks ******/
    if (!/^\/.*/.test(optionsArg.to)){ //check wether path is absolute
        plugins.beautylog.error("It seems that the given path " + optionsArg.to + " is not absolute.");
        return;
    }

    plugins.beautylog.log("Now cloning " + optionsArg.from);
    var cloneOptions:any = {
        fetchOpts: {
            callbacks: {
                certificateCheck: function() { return 1; },
                credentials: function(url, userName) {
                    let gitRepo = new plugins.smartstring.GitRepo(url);
                    let host = gitRepo.host;
                    let sshDir = plugins.path.join(plugins.smartpath.get.home(),".ssh/")
                    let pubKeyPath = plugins.path.join(sshDir,host + ".pub");
                    let privKeyPath:string = plugins.path.join(sshDir,host);
                    if(!optionsArg.keyPassphrase) optionsArg.keyPassphrase = "";
                    return plugins.nodegit.Cred.sshKeyNew(userName, pubKeyPath, privKeyPath,optionsArg.keyPassphrase);
                }
            }
        }
    };
    var cloneRepository = plugins.nodegit.Clone.clone(optionsArg.from, optionsArg.to, cloneOptions)
        .then(() => {
            SmartgitCheck(cloneRepository);
            done.resolve();
        },(err) => {
            console.log(err);
        });
    return done.promise;
};