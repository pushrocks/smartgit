import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

export let commit = (dirPathArg:string,commitMessage:string) => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        plugins.beautylog.error("smartgit.commit expects a valid git directory");
        done.reject();
        return done.promise;
    };
    // if everything is all right proceed
    plugins.shelljs.exec(`(cd ${dirPathArg} && git commit -m "${commitMessage}")`);
    done.resolve();
    return done.promise;
};