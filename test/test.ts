import "typings-test";
import beautylog = require("beautylog");
let shelljs = require("shelljs");
import path = require("path");
import "should"

import smartgit = require("../dist/index");
let paths = {
    temp: path.resolve("./test/temp/"),
    temp2: path.resolve("./test/temp2/"),
    temp3: path.resolve("./test/temp3"),
    temp4: path.resolve("./test/temp4"),
    noGit: path.resolve("./test/")
}

describe("smartgit",function(){
    describe(".clone",function(){
        it("should clone a repository using ssh and sshkey",function(done){
            this.timeout(20000);
            smartgit.clone({
                from:"git@gitlab.com:sandboxzone/sandbox-testrepo.git",
                to:paths.temp
            }).then(function(){
                done();
            });
        });
        it("should clone a repository using https",function(done){
            this.timeout(20000);
            smartgit.clone({
                from:"https://gitlab.com/sandboxzone/sandbox-testrepo.git",
                to:paths.temp2
            }).then(function(){
                done();
            });
        });
    });
    describe(".add",function(){
        it("should error for noGit",function(){
            smartgit.add.addAll(paths.noGit);
        })
        it("should add a file to an existing repository",function(){
            shelljs.exec(`(cd ${paths.temp} && cp ../test.js .)`)
            smartgit.add.addAll(paths.temp);
        })
    });
    describe("commit",function(){
        it("should error for noGit",function(){
            smartgit.commit(paths.noGit,"some commit message");
        })
        it("should commit a new file to an existing repository",function(){
            smartgit.commit(paths.temp,"added a new file");
        })
    });
    describe("init",function(){
        it("should error for noGit",function(){
            smartgit.init(paths.noGit);
        });
        it("should init a new git",function(){
            smartgit.init(paths.temp3);
        })
    });
    describe("pull",function(){
        this.timeout(20000);
        it("should error for noGit",function(){
            smartgit.pull(paths.noGit);
        });
        it("should pull from origin",function(){
            smartgit.pull(paths.temp);
        })
    });
});