import "typings-test";
import beautylog = require("beautylog");
import path = require("path");
import "should"

import smartgit = require("../dist/index");

describe("smartgit",function(){
    describe(".clone",function(){
        it("should clone a repository using ssh and sshkey",function(done){
            this.timeout(10000);
            smartgit.clone({
                from:"git@gitlab.com:sandboxzone/sandbox-testrepo.git",
                to:path.resolve("./test/temp/")
            }).then(function(){
                done();
            });
        });
        it("should clone a repository using https",function(done){
            this.timeout(10000);
            smartgit.clone({
                from:"https://gitlab.com/sandboxzone/sandbox-testrepo.git",
                to:path.resolve("./test/temp2/")
            }).then(function(){
                done();
            });
        });
    });
    describe(".check",function(){

    });
    describe("commit",function(){

    });
    describe("init",function(){

    });
});