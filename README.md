# smartgit
smart git wrapper for node.

smartgit expects git to be installed on target machine.

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartgit)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/smartgit)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartgit)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartgit/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartgit/badges/master/build.svg)](https://gitlab.com/pushrocks/smartgit/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartgit/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartgit/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/smartgit.svg)](https://david-dm.org/pushrocks/smartgit)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartgit/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartgit/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartgit/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartgit)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
We recommend the use of TypeScript for best in class intellisense

```javascript
// import smartgit:
import { GitRepo } from 'smartgit'

// Initialize smartgit:
// -- note: there are 3 ways to initialize smartgit
// -- -- 1. with a existing Git repo
// -- -- 2. with a cloned Git repo
// -- -- 3. with a new Git repo

// -- 1. existing Git Repo:
let myExistingGitRepo = new GitRepo('/path/to/existing/git/repo/')

// -- 2. cloned Git Repo:
let myClonedGitRepo: GitRepo
smartgit.createRepoFromClone('git@github.com:username/reponame.git')
    .then(gitRepo => { // non blocking
        myClonedGitRepo = gitRepo
    })

// -- 3. new Git Repo
let myNewGitRepo: GitRepo
smartgit.createRepoFromInit('/path/to/new/folder') // smartgit will create any new folder, be careful
    .then(gitRepo => { // non blocking
        myNewGitRepo = gitRepo
    })

// Using smartgit instance
// -- most used actions
// -- all actions return promises, so make sure to use promise chaining for any dependent tasks
myExistingGitRepo.addAll() // returns promise, stages all changed files
myExistingGitRepo.add(['relative/path/to/file.txt','another/file2.txt']) // returns promise, stages specific files
myExistingGitRepo.commit('my commit message') // returns promise, commits staged files
myExistingGitRepo.status() // returns promise
    .then(status => { // Use TypeScript for status type information

    })
myExistingGitRepo.check() // returns promise, checks repo health
myExistingGitRepo.remoteAdd('git@github.com:username/reponame.git')
```

Tip: use [smartssh](https://npmjs.com/smartssh) to setup your SSH environment

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
