# @pushrocks/smartgit
smart wrapper for nodegit

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartgit)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartgit)
* [github.com (source mirror)](https://github.com/pushrocks/smartgit)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartgit/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartgit/badges/master/build.svg)](https://gitlab.com/pushrocks/smartgit/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartgit/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartgit/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartgit.svg)](https://www.npmjs.com/package/@pushrocks/smartgit)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartgit/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartgit)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

We recommend the use of TypeScript for best in class intellisense

```javascript
// import smartgit:
import { GitRepo } from 'smartgit';

// Initialize smartgit:
// -- note: there are 3 ways to initialize smartgit
// -- -- 1. with a existing Git repo
// -- -- 2. with a cloned Git repo
// -- -- 3. with a new Git repo

// -- 1. existing Git Repo:
let myExistingGitRepo = new GitRepo('/path/to/existing/git/repo/');

// -- 2. cloned Git Repo:
let myClonedGitRepo: GitRepo;
smartgit.createRepoFromClone('git@github.com:username/reponame.git').then(gitRepo => {
  // non blocking
  myClonedGitRepo = gitRepo;
});

// -- 3. new Git Repo
let myNewGitRepo: GitRepo;
smartgit
  .createRepoFromInit('/path/to/new/folder') // smartgit will create any new folder, be careful
  .then(gitRepo => {
    // non blocking
    myNewGitRepo = gitRepo;
  });

// Using smartgit instance
// -- most used actions
// -- all actions return promises, so make sure to use promise chaining for any dependent tasks
myExistingGitRepo.addAll(); // returns promise, stages all changed files
myExistingGitRepo.add(['relative/path/to/file.txt', 'another/file2.txt']); // returns promise, stages specific files
myExistingGitRepo.commit('my commit message'); // returns promise, commits staged files
myExistingGitRepo
  .status() // returns promise
  .then(status => {
    // Use TypeScript for status type information
  });
myExistingGitRepo.check(); // returns promise, checks repo health
myExistingGitRepo.remoteAdd('git@github.com:username/reponame.git');
```

Tip: use [smartssh](https://npmjs.com/smartssh) to setup your SSH environment

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://maintainedby.lossless.com)
