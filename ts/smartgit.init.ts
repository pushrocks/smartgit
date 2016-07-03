import plugins = require("./smartgit.plugins");

export let init = (dirPathArg:string) => {
    let done = plugins.Q.defer();
    if (typeof dirPathArg == "undefined") { //lets check if a destination is defined...
        plugins.beautylog.error("smartgit.init requires an absolute directory path!");
        return;
    };
    plugins.smartfile.fs.ensureDir(dirPathArg);
    plugins.shelljs.exec(`(cd ${dirPathArg} && git init)`);
    done.resolve(dirPathArg);
    return done.promise;
};