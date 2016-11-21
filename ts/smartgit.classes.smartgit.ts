import * as q from 'q'
import * as plugins from './smartgit.plugins'

/**
 * class GitRepo allows access to git directories from node
 */
export class GitRepo {
    repoBase: string
    constructor(repoBaseArg: string) {
        this.repoBase = repoBaseArg
    }

    /**
     * checks if the Repo is valid
     */
    check(): boolean {
        try {
            return plugins.smartfile.fs.isDirectory(plugins.path.join(this.repoBase, '.git'))
        } catch (err) {
            return false
        }
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
}


export let createRepoFromClone = (fromArg: string, toArg: string) => {
    let done = q.defer<GitRepo>()
    plugins.smartfile.fs.ensureDir(toArg)
    plugins.shelljs.exec(`git clone ${fromArg} ${toArg}`)
    let newRepo = new GitRepo(toArg)
    done.resolve(newRepo)
    return done.promise
}

export let createRepoFromInit = (destinationDirArg: string) => {
    let done = q.defer<GitRepo>()
    plugins.smartfile.fs.ensureDir(destinationDirArg)
    plugins.shelljs.exec(`cd destinationDirArg && git init`)
    let newRepo = new GitRepo(destinationDirArg)
    done.resolve(newRepo)
}
