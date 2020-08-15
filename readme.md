# @pushrocks/smartgit
smart wrapper for nodegit

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartgit)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartgit)
* [github.com (source mirror)](https://github.com/pushrocks/smartgit)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartgit/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/smartgit/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/smartgit/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/smartgit)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/smartgit)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/smartgit)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/smartgit)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/smartgit)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

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
smartgit.createRepoFromClone('git@github.com:username/reponame.git').then((gitRepo) => {
  // non blocking
  myClonedGitRepo = gitRepo;
});

// -- 3. new Git Repo
let myNewGitRepo: GitRepo;
smartgit
  .createRepoFromInit('/path/to/new/folder') // smartgit will create any new folder, be careful
  .then((gitRepo) => {
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
  .then((status) => {
    // Use TypeScript for status type information
  });
myExistingGitRepo.check(); // returns promise, checks repo health
myExistingGitRepo.remoteAdd('git@github.com:username/reponame.git');
```

Tip: use [smartssh](https://npmjs.com/smartssh) to setup your SSH environment

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)


## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
