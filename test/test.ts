import 'typings-test'
import beautylog = require('beautylog')
let shelljs = require('shelljs')
import path = require('path')
import * as should from 'should'

import smartgit = require('../dist/index')
let paths = {
    temp: path.resolve('./test/temp/'),
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
        it('should create a valid new instance from path', function () {
            testGitRepo = new smartgit.GitRepo('path.temp')
            should(testGitRepo).be.instanceOf(smartgit.GitRepo)
        })
        it('should clone a repository using ssh and sshkey', function (done) {
            this.timeout(40000)
            smartgit.createRepoFromClone('git@gitlab.com:sandboxzone/sandbox-testrepo.git', paths.temp)
                .then((gitRepo) => {
                    should(gitRepo).be.instanceOf(smartgit.GitRepo)
                    done()
                }).catch(err => {
                    throw err
                })
        })
        it('should clone a repository using https', function (done) {
            this.timeout(40000)
            smartgit.createRepoFromClone('https://gitlab.com/sandboxzone/sandbox-testrepo.git', paths.temp2)
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
            shelljs.exec(`(cd ${paths.temp} && cp ../test.js .)`)
            testGitRepo.addAll(paths.temp)
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
    })
})
