/// <reference path="../ts/typings/main.d.ts" />
let smartgit = require("../dist/index.js");
let beautylog = require("beautylog");
let path = require("path");
let should = require("should");

describe("smartgit",function(){
    describe(".clone",function(){
        it("should clone a repository",function(done){
            this.timeout(10000);
            smartgit.clone({
                from:"https://github.com/pushrocks/docs.git",
                to:path.resolve("./test/temp/")
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