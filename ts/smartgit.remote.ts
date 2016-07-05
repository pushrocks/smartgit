import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

let add = (dirPathArg,remoteNameArg:string, remoteLinkArg:string) => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        let err = new Error("smartgit.remote.add expects a valid git directory");
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    };
    if(!remoteNameArg) {
        let err = new Error("smartgit.remote.add expects a valid remote name");
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    };
    if(!remoteLinkArg) {
        let err = new Error();
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    };
    // if everything is all right proceed
    plugins.shelljs.exec(`cd ${dirPathArg} && git remote add ${remoteNameArg} ${remoteLinkArg}`);
    remote.list(dirPathArg);
    done.resolve();
    return done.promise;
};

let check = (dirPathArg:string, remoteNameArg:string, remoteLinkArg) => {

}

let list = (dirPathArg) => {
    let done = plugins.Q.defer();
    let remotes = {};
    if(!helpers.isGitDirectory(dirPathArg)){
        let err = new Error("smartgit.remote.list expects a valid git directory");
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    };
    // if  everything is all right proceed
    plugins.shelljs.exec(`cd ${dirPathArg} && git remote -v`).stdout;
    done.resolve(remotes);
    return done.promise;
};

let remove = (dirPathArg:string) => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        let err = new Error("smartgit.remote.remove expects a valid git directory");
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    };
    // if everything is all right 
}

export let remote = {
    add: add,
    list: list,
    remove: remove
}