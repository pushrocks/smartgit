import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

let addAll = (dirPathArg:string) => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        let err = new Error("smartgit.add expects a valid git directory!");
        plugins.beautylog.error(err.message);
        done.reject(err);
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
