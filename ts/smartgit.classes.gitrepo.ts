import * as q from 'q'
import * as plugins from './smartgit.plugins'

/**
 * class GitRepo allows access to git directories from node
 */
export class GitRepo {
    repoBase: string
    constructor(repoBaseArg: string) {
        this.repoBase = repoBaseArg
        if (!this.check()) {
            throw new Error('no valid git repo')
        }
    }

    /**
     * checks if the Repo is valid
     */
    check(): boolean {
        return plugins.smartfile.fs.isDirectory(plugins.path.join(this.repoBase, '.git'))
    }

    /**
     * stage all files in working directory
     */
    addAll(dirPathArg: string) {
        let done = q.defer()
        plugins.shelljs.exec(`(cd ${dirPathArg} && git add -A && git status)`)
        done.resolve(dirPathArg)
        return done.promise
    };

    /**
     * add a remote to the GitRepo
     */
    remoteAdd(remoteNameArg: string, remoteLinkArg: string) {
        let done = q.defer()
        if (!remoteNameArg) {
            let err = new Error('smartgit.remote.add expects a valid remote name')
            plugins.beautylog.error(err.message)
            done.reject(err)
            return done.promise
        };
        if (!remoteLinkArg) {
            let err = new Error()
            plugins.beautylog.error(err.message)
            done.reject(err)
            return done.promise
        };

        // if everything is all right proceed
        plugins.shelljs.exec(`cd ${this.repoBase} && git remote add ${remoteNameArg} ${remoteLinkArg}`)
        done.resolve()
        return done.promise
    }

    /**
     * list remotes for a Gip
     */
    remoteList() {
        let done = q.defer()
        let remotes = {}
        plugins.shelljs.exec(`cd ${this.repoBase} && git remote -v`)
        done.resolve(remotes)
        return done.promise
    };

    /**
     * remove remote
     */
    remoteRemove(dirPathArg: string) {
        let done = q.defer()
        return done.promise
    }

    /**
     * commit all files that are currently staged
     */
    commit(commitMessage: string) {
        let done = q.defer()
        plugins.shelljs.exec(`(cd ${this.repoBase} && git commit -m "${commitMessage}")`)
        done.resolve()
        return done.promise
    }


    /**
     * pull latest changes from remote
     */
    pull(sourceArg: string = '', branchArg: string = '') {
        let done = q.defer()
        // if everything is allright proceed
        plugins.shelljs.exec(`(cd ${this.repoBase} && git pull ${sourceArg} ${branchArg})`)
        done.resolve()
        return done.promise
    }

    /**
     * push new commits to remote
     */
    push(remoteNameArg: string = '', remoteBranchArg: string = '') {
        let done = q.defer()
        // if everything seems allright proceed
        plugins.shelljs.exec(`(cd ${this.repoBase} && git push ${remoteNameArg} ${remoteBranchArg})`)
        done.resolve()
        return done.promise
    }

    /**
     * sync
     */
    sync() {
        this.pull().then(() => {
            this.push()
        })
    }

    /**
     * get the current status
     */
    status() {
        let done = q.defer()
        plugins.shelljs.exec(`(cd ${this.repoBase} && git status)`)
        done.resolve()
        return done.promise
    }
}

/**
 * creates a new GitRepo Instance after cloning a project
 */
export let createRepoFromClone = (fromArg: string, toArg: string) => {
    let done = q.defer<GitRepo>()
    plugins.smartfile.fs.ensureDir(toArg)
    plugins.shelljs.exec(`git clone ${fromArg} ${toArg}`)
    let newRepo = new GitRepo(toArg)
    done.resolve(newRepo)
    return done.promise
}

/**
 * creates a new GitRepo instance after initializing a new Git Repository
 */
export let createRepoFromInit = (destinationDirArg: string) => {
    let done = q.defer<GitRepo>()
    plugins.smartfile.fs.ensureDir(destinationDirArg)
    plugins.shelljs.exec(`cd destinationDirArg && git init`)
    let newRepo = new GitRepo(destinationDirArg)
    done.resolve(newRepo)
}
