import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

let addAll = (dirPathArg:string) => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        plugins.beautylog.error("smartgit.add expects a valid git directory!");
        done.reject();
        return done.promise;
    };
    // if everything is ok proceed
    plugins.shelljs.exec(`(cd ${dirPathArg} && git add -A && git status)`);
    done.resolve(dirPathArg);
    return done.promise;
};

export let add = {
    addAll: addAll
}
