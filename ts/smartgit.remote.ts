import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

let add = (dirPathArg,remoteNameArg:string, remoteLinkArg:string) => {
    let done = plugins.Q.defer();
    if(!helpers.isGitDirectory(dirPathArg)){
        plugins.beautylog.error("smartgit.remote.add expects a valid git directory");
        done.reject();
        return done.promise;
    };
    if(!remoteNameArg) {
        plugins.beautylog.error("smartgit.remote.add expects a valid remote name");
        done.reject();
        return done.promise;
    };
    if(!remoteLinkArg) {
        plugins.beautylog.error("smartgit.remote.add expects a valid remote link");
        done.reject();
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
        plugins.beautylog.error("smartgit.remote.list expects a valid git directory");
        done.reject();
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
        plugins.beautylog.error("smartgit.remote.remove expects a valid git directory");
        done.reject();
        return done.promise;
    };
    // if everything is all right 
}

export let remote = {
    add: add,
    list: list,
    remove: remove
}