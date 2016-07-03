import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

export let add = (dirPathArg:string) => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        plugins.beautylog.error("smartgit.add expects a valif git directory!");
        done.reject();
        return done.promise;
    };
    // if everything is ok proceed
    plugins.shelljs.exec("");
    done.resolve(dirPathArg);
    return done.promise;
};
