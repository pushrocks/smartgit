"use strict";
require("typings-test");
let shelljs = require('shelljs');
const path = require("path");
const should = require("should");
const smartgit = require("../dist/index");
let paths = {
    temp: path.resolve('./test/temp/'),
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
        it('should create a valid new instance from path', function () {
            testGitRepo = new smartgit.GitRepo('path.temp');
            should(testGitRepo).be.instanceOf(smartgit.GitRepo);
        });
        it('should clone a repository using ssh and sshkey', function (done) {
            this.timeout(40000);
            smartgit.createRepoFromClone('git@gitlab.com:sandboxzone/sandbox-testrepo.git', paths.temp)
                .then((gitRepo) => {
                should(gitRepo).be.instanceOf(smartgit.GitRepo);
                done();
            }).catch(err => {
                throw err;
            });
        });
        it('should clone a repository using https', function (done) {
            this.timeout(40000);
            smartgit.createRepoFromClone('https://gitlab.com/sandboxzone/sandbox-testrepo.git', paths.temp2)
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
            shelljs.exec(`(cd ${paths.temp} && cp ../test.js .)`);
            testGitRepo.addAll(paths.temp);
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDaEMsNkJBQTZCO0FBQzdCLGlDQUFnQztBQUVoQywwQ0FBMEM7QUFDMUMsSUFBSSxLQUFLLEdBQUc7SUFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDbEMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO0lBQ3BDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0NBQ2pDLENBQUE7QUFFRCxRQUFRLENBQUMsVUFBVSxFQUFFO0lBQ2pCLElBQUksV0FBNkIsQ0FBQTtJQUNqQyxJQUFJLGlCQUFtQyxDQUFBO0lBQ3ZDLElBQUksZUFBaUMsQ0FBQTtJQUNyQyxRQUFRLENBQUMsVUFBVSxFQUFFO1FBQ2pCLEVBQUUsQ0FBQyw4Q0FBOEMsRUFBRTtZQUMvQyxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQy9DLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN2RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxnREFBZ0QsRUFBRSxVQUFVLElBQUk7WUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQixRQUFRLENBQUMsbUJBQW1CLENBQUMsaURBQWlELEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDdEYsSUFBSSxD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