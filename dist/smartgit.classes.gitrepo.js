"use strict";
const q = require("q");
const plugins = require("./smartgit.plugins");
/**
 * class GitRepo allows access to git directories from node
 */
class GitRepo {
    constructor(repoBaseArg) {
        this.repoBase = repoBaseArg;
        if (!this.check()) {
            throw new Error('no valid git repo');
        }
    }
    /**
     * checks if the Repo is valid
     */
    check() {
        return plugins.smartfile.fs.isDirectory(plugins.path.join(this.repoBase, '.git'));
    }
    /**
     * stage all files in working directory
     * @executes SYNC
     */
    addAll() {
        let done = q.defer();
        plugins.shelljs.exec(`(cd ${this.repoBase} && git add -A && git status)`);
        done.resolve(this.repoBase);
        return done.promise;
    }
    ;
    /**
     * add a remote to the GitRepo
     */
    remoteAdd(remoteNameArg, remoteLinkArg) {
        let done = q.defer();
        if (!remoteNameArg) {
            let err = new Error('smartgit.remote.add expects a valid remote name');
            plugins.beautylog.error(err.message);
            done.reject(err);
            return done.promise;
        }
        ;
        if (!remoteLinkArg) {
            let err = new Error();
            plugins.beautylog.error(err.message);
            done.reject(err);
            return done.promise;
        }
        ;
        // if everything is all right proceed
        plugins.shelljs.exec(`cd ${this.repoBase} && git remote add ${remoteNameArg} ${remoteLinkArg}`);
        done.resolve();
        return done.promise;
    }
    /**
     * list remotes for a Gip
     */
    remoteList() {
        let done = q.defer();
        let remotes = {};
        plugins.shelljs.exec(`cd ${this.repoBase} && git remote -v`);
        done.resolve(remotes);
        return done.promise;
    }
    ;
    /**
     * remove remote
     */
    remoteRemove(dirPathArg) {
        let done = q.defer();
        return done.promise;
    }
    /**
     * commit all files that are currently staged
     */
    commit(commitMessage) {
        let done = q.defer();
        plugins.shelljs.exec(`(cd ${this.repoBase} && git commit -m "${commitMessage}")`);
        done.resolve();
        return done.promise;
    }
    /**
     * pull latest changes from remote
     */
    pull(sourceArg = '', branchArg = '') {
        let done = q.defer();
        // if everything is allright proceed
        plugins.shelljs.exec(`(cd ${this.repoBase} && git pull ${sourceArg} ${branchArg})`);
        done.resolve();
        return done.promise;
    }
    /**
     * push new commits to remote
     */
    push(remoteNameArg = '', remoteBranchArg = '') {
        let done = q.defer();
        // if everything seems allright proceed
        plugins.shelljs.exec(`(cd ${this.repoBase} && git push ${remoteNameArg} ${remoteBranchArg})`);
        done.resolve();
        return done.promise;
    }
    /**
     * sync
     */
    sync() {
        this.pull().then(() => {
            this.push();
        });
    }
    /**
     * get the current status
     */
    status() {
        let done = q.defer();
        plugins.shelljs.exec(`(cd ${this.repoBase} && git status)`);
        done.resolve();
        return done.promise;
    }
}
exports.GitRepo = GitRepo;
/**
 * creates a new GitRepo Instance after cloning a project
 */
exports.createRepoFromClone = (fromArg, toArg) => {
    let done = q.defer();
    plugins.smartfile.fs.ensureDir(toArg);
    plugins.shelljs.exec(`git clone ${fromArg} ${toArg}`);
    let newRepo = new GitRepo(toArg);
    done.resolve(newRepo);
    return done.promise;
};
/**
 * creates a new GitRepo instance after initializing a new Git Repository
 */
exports.createRepoFromInit = (destinationDirArg) => {
    let done = q.defer();
    plugins.smartfile.fs.ensureDir(destinationDirArg);
    plugins.shelljs.exec(`cd destinationDirArg && git init`);
    let newRepo = new GitRepo(destinationDirArg);
    done.resolve(newRepo);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuY2xhc3Nlcy5naXRyZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRnaXQuY2xhc3Nlcy5naXRyZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBc0I7QUFDdEIsOENBQTZDO0FBRTdDOztHQUVHO0FBQ0g7SUFFSSxZQUFZLFdBQW1CO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFBO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDeEMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUs7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUNyRixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTTtRQUNGLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNwQixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLCtCQUErQixDQUFDLENBQUE7UUFDekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdkIsQ0FBQztJQUFBLENBQUM7SUFFRjs7T0FFRztJQUNILFNBQVMsQ0FBQyxhQUFxQixFQUFFLGFBQXFCO1FBQ2xELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNwQixFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFD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