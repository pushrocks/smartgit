import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

export let commit = (dirPathArg:string,commitMessage:string) => {
    let done = plugins.Q.defer();
    if(!plugins.smartfile.fs.isDirectory(plugins.path.join(dirPathArg,".git"))){
        plugins.beautylog.error("smartgit.commit expects a valid git directory");
        done.reject();
        return done.promise;
    };
    // if everything is all right proceed
    plugins.shelljs.exec(`git commit -m "${commitMessage}"`);
    done.resolve();
    return done.promise;
};