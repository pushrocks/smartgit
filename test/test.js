"use strict";
require("typings-test");
let shelljs = require('shelljs');
const path = require("path");
const should = require("should");
const smartgit = require("../dist/index");
let paths = {
    temp1: path.resolve('./test/temp/'),
    temp2: path.resolve('./test/temp2/'),
    temp3: path.resolve('./test/temp3'),
    temp4: path.resolve('./test/temp4'),
    noGit: path.resolve('./test/')
};
describe('smartgit', function () {
    let testGitRepo;
    let testGitRepoCloned;
    let testGitRepoInit;
    describe('instance', function () {
        it('should error for invalid path', function (done) {
            try {
                testGitRepo = new smartgit.GitRepo(paths.temp1);
            }
            catch (err) {
                should(testGitRepo).not.be.instanceOf(smartgit.GitRepo);
                done();
            }
        });
        it('should init a new repo', function (done) {
            this.timeout(40000);
            smartgit.createRepoFromInit(paths.temp1)
                .then((gitRepo) => {
                should(gitRepo).be.instanceOf(smartgit.GitRepo);
                done();
            }).catch(err => {
                throw err;
            });
        });
        it('should create am instance for an existing repo', function () {
            testGitRepo = new smartgit.GitRepo(paths.temp1);
            should(testGitRepo).be.instanceOf(smartgit.GitRepo);
        });
        it('should clone a repository using ssh and sshkey', function (done) {
            this.timeout(40000);
            smartgit.createRepoFromClone('git@gitlab.com:sandboxzone/sandbox-testrepo.git', paths.temp2)
                .then((gitRepo) => {
                should(gitRepo).be.instanceOf(smartgit.GitRepo);
                done();
            }).catch(err => {
                throw err;
            });
        });
        it('should clone a repository using https', function (done) {
            this.timeout(40000);
            smartgit.createRepoFromClone('https://gitlab.com/sandboxzone/sandbox-testrepo.git', paths.temp3)
                .then((gitRepo) => {
                should(gitRepo).be.instanceOf(smartgit.GitRepo);
                done();
            }).catch(err => {
                throw err;
            });
        });
    });
    describe('.add', function () {
        it('should add a file to an existing repository', function () {
            shelljs.exec(`(cd ${paths.temp1} && cp ../test.js .)`);
            testGitRepo.addAll();
        });
    });
    describe('.check()', function () {
        it('should check a git repo', function () {
            let checkResult = testGitRepo.check();
            should(checkResult).be.true();
        });
    });
    describe('commit', function () {
        it('should commit a new file to an existing repository', function () {
            testGitRepo.commit('added a new file');
        });
    });
    describe('pull', function () {
        this.timeout(40000);
        it('should pull from origin', function (done) {
            testGitRepo.pull()
                .then(() => {
                done();
            });
        });
    });
    describe('push', function () {
        this.timeout(40000);
        it('should push to origin', function (done) {
            testGitRepo.push('origin', 'master')
                .then(() => {
                done();
            });
        });
    });
    describe('remote', function () {
        it('should add a remote', function () {
            testGitRepo.remoteAdd('origin2', 'https://github.com/pushrocks/somerepo');
        });
        it('should', function (done) {
            testGitRepo.remoteList()
                .then(() => {
                done();
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDaEMsNkJBQTZCO0FBQzdCLGlDQUFnQztBQUVoQywwQ0FBMEM7QUFDMUMsSUFBSSxLQUFLLEdBQUc7SUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO0lBQ3BDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0NBQ2pDLENBQUE7QUFJRCxRQUFRLENBQUMsVUFBVSxFQUFFO0lBQ2pCLElBQUksV0FBNkIsQ0FBQTtJQUNqQyxJQUFJLGlCQUFtQyxDQUFBO0lBQ3ZDLElBQUksZUFBaUMsQ0FBQTtJQUNyQyxRQUFRLENBQUMsVUFBVSxFQUFFO1FBQ2pCLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxVQUFVLElBQUk7WUFDOUMsSUFBSSxDQUFDO2dCQUNELFdBQVcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ25ELENBQUU7WUFBQSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQ3ZELElBQUksRUFBRSxDQUFBO1lBQ1YsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLHdCQUF3QixFQUFFLFVBQVUsSUFBSTtZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ25CLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNuQyxJQUFJLENBQUMsQ0FBQyxPQUFPO2dCQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDL0MsSUFBSSxFQUFFLENBQUE7WUFDVixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRztnQkFDUixNQUFNLEdBQUcsQ0FBQTtZQUNiLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsZ0RBQWdELEVBQUU7WUFDakQsV0FBVyxHQUFHLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDL0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLFVBQVUsSUFBSTtZQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ25CLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxpREFBaUQsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUN2RixJQUFJLENBQUMsQ0FBQyxPQUFPO2dCQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDL0MsSUFBSSxFQUFFLENBQUE7WUFDVixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRztnQkFDUixNQUFNLEdBQUcsQ0FBQTtZQUNiLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsdUNBQXVDLEVBQUUsVUFBVSxJQUFJO1lBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbkIsUUFBUSxDQUFDLG1CQUFtQixDQUFDLHFEQUFxRCxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQzNGLElBQUksQ0FBQyxDQUFDLE9BQU87Z0JBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2dCQUMvQyxJQUFJLEVBQUUsQ0FBQTtZQUNWLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHO2dCQUNSLE1BQU0sR0FBRyxDQUFBO1lBQ2IsQ0FBQyxDQUFDLENBQUE7UUFDVixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNiLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRTtZQUM5QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEtBQUssc0JBQXNCLENBQUMsQ0FBQTtZQUN0RCxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxVQUFVLEVBQUU7UUFDakIsRUFBRSxDQUFDLHlCQUF5QixFQUFFO1lBQzFCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsUUFBUSxFQUFFO1FBQ2YsRUFBRSxDQUFDLG9EQUFvRCxFQUFFO1lBQ3JELFdBQVcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUMxQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbkIsRUFBRSxDQUFDLHlCQUF5QixFQUFFLFVBQVUsSUFBSTtZQUN4QyxXQUFXLENBQUMsSUFBSSxFQUFFO2lCQUNiLElBQUksQ0FBQztnQkFDRixJQUFJLEVBQUUsQ0FBQTtZQUNWLENBQUMsQ0FBQyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtJQUNGLFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ25CLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxVQUFVLElBQUk7WUFDdEMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO2lCQUMvQixJQUFJLENBQUM7Z0JBQ0YsSUFBSSxFQUFFLENBQUE7WUFDVixDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFDRixRQUFRLENBQUMsUUFBUSxFQUFFO1FBQ2YsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBQ3RCLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLHVDQUF1QyxDQUFDLENBQUE7UUFDN0UsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsUUFBUSxFQUFFLFVBQVMsSUFBSTtZQUN0QixXQUFXLENBQUMsVUFBVSxFQUFFO2lCQUNuQixJQUFJLENBQUM7Z0JBQ0YsSUFBSSxFQUFFLENBQUE7WUFDVixDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9