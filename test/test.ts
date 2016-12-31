import 'typings-test'
import beautylog = require('beautylog')
let shelljs = require('shelljs')
import path = require('path')
import * as should from 'should'

import smartgit = require('../dist/index')
let paths = {
    temp1: path.resolve('./test/temp/'),
    temp2: path.resolve('./test/temp2/'),
    temp3: path.resolve('./test/temp3'),
    temp4: path.resolve('./test/temp4'),
    noGit: path.resolve('./test/')
}

describe('smartgit', function () {
    let testGitRepo: smartgit.GitRepo
    let testGitRepoCloned: smartgit.GitRepo
    let testGitRepoInit: smartgit.GitRepo
    describe('instance', function () {
        it('should error for invalid path', function (done) {
            try {
                testGitRepo = new smartgit.GitRepo(paths.temp1)
            } catch (err) {
                should(testGitRepo).not.be.instanceOf(smartgit.GitRepo)
                done()
            }
        })
        it('should init a new repo', function (done) {
            this.timeout(40000)
            smartgit.createRepoFromInit(paths.temp1)
                .then((gitRepo) => {
                    should(gitRepo).be.instanceOf(smartgit.GitRepo)
                    done()
                }).catch(err => {
                    throw err
                })
        })
        it('should create am instance for an existing repo', function () {
            testGitRepo = new smartgit.GitRepo(paths.temp1)
            should(testGitRepo).be.instanceOf(smartgit.GitRepo)
        })
        it('should clone a repository using ssh and sshkey', function (done) {
            this.timeout(40000)
            smartgit.createRepoFromClone('git@gitlab.com:sandboxzone/sandbox-testrepo.git', paths.temp2)
                .then((gitRepo) => {
                    should(gitRepo).be.instanceOf(smartgit.GitRepo)
                    done()
                }).catch(err => {
                    throw err
                })
        })
        it('should clone a repository using https', function (done) {
            this.timeout(40000)
            smartgit.createRepoFromClone('https://gitlab.com/sandboxzone/sandbox-testrepo.git', paths.temp3)
                .then((gitRepo) => {
                    should(gitRepo).be.instanceOf(smartgit.GitRepo)
                    done()
                }).catch(err => {
                    throw err
                })
        })
    })
    describe('.add', function () {
        it('should add a file to an existing repository', function () {
            shelljs.exec(`(cd ${paths.temp1} && cp ../test.js .)`)
            testGitRepo.addAll()
        })
    })
    describe('.check()', function() {
        it('should check a git repo', function() {
            let checkResult = testGitRepo.check()
            should(checkResult).be.true()
        })
    })
    describe('commit', function () {
        it('should commit a new file to an existing repository', function () {
            testGitRepo.commit('added a new file')
        })
    })
    describe('pull', function () {
        this.timeout(40000)
        it('should pull from origin', function (done) {
            testGitRepo.pull()
                .then(() => {
                    done()
                })
        })
    })
    describe('push', function () {
        this.timeout(40000)
        it('should push to origin', function (done) {
            testGitRepo.push('origin', 'master')
                .then(() => {
                    done()
                })
        })
    })
    describe('remote', function () {
        it('should add a remote', function () {
            testGitRepo.remoteAdd('origin2', 'https://github.com/pushrocks/somerepo')
        })
        it('should', function(done) {
            testGitRepo.remoteList()
                .then(() => {
                    done()
                })
        })
    })
})
