import * as q from 'q'
import plugins = require("./smartgit.plugins");

import { GitRepo } from './smartgit.classes.gitrepo'
export {
    GitRepo
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
    plugins.shelljs.exec(`cd ${destinationDirArg} && git init`)
    let newRepo = new GitRepo(destinationDirArg)
    done.resolve(newRepo)
    return done.promise
}
