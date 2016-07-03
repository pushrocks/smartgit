"use strict";
require("typings-test");
var shelljs = require("shelljs");
var path = require("path");
require("should");
var smartgit = require("../dist/index");
var paths = {
    temp: path.resolve("./test/temp/"),
    temp2: path.resolve("./test/temp2/"),
    temp3: path.resolve("./test/temp3"),
    temp4: path.resolve("./test/temp4"),
    noGit: path.resolve("./test/")
};
describe("smartgit", function () {
    describe(".clone", function () {
        it("should clone a repository using ssh and sshkey", function (done) {
            this.timeout(20000);
            smartgit.clone({
                from: "git@gitlab.com:sandboxzone/sandbox-testrepo.git",
                to: paths.temp
            }).then(function () {
                done();
            });
        });
        it("should clone a repository using https", function (done) {
            this.timeout(20000);
            smartgit.clone({
                from: "https://gitlab.com/sandboxzone/sandbox-testrepo.git",
                to: paths.temp2
            }).then(function () {
                done();
            });
        });
    });
    describe(".add", function () {
        it("should error for noGit", function () {
            smartgit.add.addAll(paths.noGit);
        });
        it("should add a file to an existing repository", function () {
            shelljs.exec("(cd " + paths.temp + " && cp ../test.js .)");
            smartgit.add.addAll(paths.temp);
        });
    });
    describe("commit", function () {
        it("should error for noGit", function () {
            smartgit.commit(paths.noGit, "some commit message");
        });
        it("should commit a new file to an existing repository", function () {
            smartgit.commit(paths.temp, "added a new file");
        });
    });
    describe("init", function () {
        it("should error for noGit", function () {
            smartgit.init(paths.noGit);
        });
        it("should init a new git", function () {
            smartgit.init(paths.temp3);
        });
    });
    describe("pull", function () {
        this.timeout(20000);
        it("should error for noGit", function () {
            smartgit.pull(paths.noGit);
        });
        it("should pull from origin", function () {
            smartgit.pull(paths.temp);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFFdEIsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLElBQU8sSUFBSSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLFFBQU8sUUFFUCxDQUFDLENBRmM7QUFFZixJQUFPLFFBQVEsV0FBVyxlQUFlLENBQUMsQ0FBQztBQUMzQyxJQUFJLEtBQUssR0FBRztJQUNSLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUNsQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7SUFDcEMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQ25DLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7Q0FDakMsQ0FBQTtBQUVELFFBQVEsQ0FBQyxVQUFVLEVBQUM7SUFDaEIsUUFBUSxDQUFDLFFBQVEsRUFBQztRQUNkLEVBQUUsQ0FBQyxnREFBZ0QsRUFBQyxVQUFTLElBQUk7WUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBQyxpREFBaUQ7Z0JBQ3RELEVBQUUsRUFBQyxLQUFLLENBQUMsSUFBSTthQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBQyxVQUFTLElBQUk7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBQyxxREFBcUQ7Z0JBQzFELEVBQUUsRUFBQyxLQUFLLENBQUMsS0FBSzthQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLE1BQU0sRUFBQztRQUNaLEVBQUUsQ0FBQyx3QkFBd0IsRUFBQztZQUN4QixRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsNkNBQTZDLEVBQUM7WUFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFPLEtBQUssQ0FBQyxJQUFJLHlCQUFzQixDQUFDLENBQUE7WUFDckQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsUUFBUSxFQUFDO1FBQ2QsRUFBRSxDQUFDLHdCQUF3QixFQUFDO1lBQ3hCLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLG9EQUFvRCxFQUFDO1lBQ3BELFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxFQUFDO1FBQ1osRUFBRSxDQUFDLHdCQUF3QixFQUFDO1lBQ3hCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLHVCQUF1QixFQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxFQUFDO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixFQUFFLENBQUMsd0JBQXdCLEVBQUM7WUFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMseUJBQXlCLEVBQUM7WUFDekIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=