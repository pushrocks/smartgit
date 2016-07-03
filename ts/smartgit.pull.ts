import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

export let pull = (dirPathArg:string,sourceArg:string = "", branchArg:string = "") => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        plugins.beautylog.error("smartgit.pull expects a valid git directory");
        done.reject();
        return done.promse;
    };
    plugins.shelljs.exec(`(cd ${dirPathArg} && git pull ${sourceArg} ${branchArg})`);
    done.resolve(dirPathArg);
    return done.promise;
};