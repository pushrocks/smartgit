"use strict";
require("typings-test");
var path = require("path");
require("should");
var smartgit = require("../dist/index");
describe("smartgit", function () {
    describe(".clone", function () {
        it("should clone a repository using ssh and sshkey", function (done) {
            this.timeout(20000);
            smartgit.clone({
                from: "git@gitlab.com:sandboxzone/sandbox-testrepo.git",
                to: path.resolve("./test/temp/")
            }).then(function () {
                done();
            });
        });
        it("should clone a repository using https", function (done) {
            this.timeout(20000);
            smartgit.clone({
                from: "https://gitlab.com/sandboxzone/sandbox-testrepo.git",
                to: path.resolve("./test/temp2/")
            }).then(function () {
                done();
            });
        });
    });
    describe(".check", function () {
    });
    describe("commit", function () {
    });
    describe("init", function () {
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFFdEIsSUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsUUFBTyxRQUVQLENBQUMsQ0FGYztBQUVmLElBQU8sUUFBUSxXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBRTNDLFFBQVEsQ0FBQyxVQUFVLEVBQUM7SUFDaEIsUUFBUSxDQUFDLFFBQVEsRUFBQztRQUNkLEVBQUUsQ0FBQyxnREFBZ0QsRUFBQyxVQUFTLElBQUk7WUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBQyxpREFBaUQ7Z0JBQ3RELEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzthQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBQyxVQUFTLElBQUk7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBQyxxREFBcUQ7Z0JBQzFELEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQzthQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLFFBQVEsRUFBQztJQUVsQixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxRQUFRLEVBQUM7SUFFbEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxFQUFDO0lBRWhCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==