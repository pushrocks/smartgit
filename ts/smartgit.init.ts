import plugins = require("./smartgit.plugins");

export let init = (dirPathArg:string) => {
    let done = plugins.Q.defer();
    if (typeof dirPathArg == "undefined") { //lets check if a destination is defined...
        let err = new Error("smartgit.init requires an absolute directory path!")
        plugins.beautylog.error(err.message);
        done.reject("err");
        return done.promise;
    };
    plugins.smartfile.fs.ensureDir(dirPathArg);
    plugins.shelljs.exec(`(cd ${dirPathArg} && git init)`);
    done.resolve(dirPathArg);
    return done.promise;
};