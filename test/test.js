"use strict";
require("typings-test");
var path = require("path");
require("should");
var smartgit = require("../dist/index");
describe("smartgit", function () {
    describe(".clone", function () {
        it("should clone a repository using ssh and sshkey", function (done) {
            this.timeout(10000);
            smartgit.clone({
                from: "git@gitlab.com:sandboxzone/sandbox-testrepo.git",
                to: path.resolve("./test/temp/")
            }).then(function () {
                done();
            });
        });
        it("should clone a repository using https", function (done) {
            this.timeout(10000);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFFdEIsSUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsUUFBTyxRQUVQLENBQUMsQ0FGYztBQUVmLElBQU8sUUFBUSxXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBRTNDLFFBQVEsQ0FBQyxVQUFVLEVBQUM7SUFDaEIsUUFBUSxDQUFDLFFBQVEsRUFBQztRQUNkLEVBQUUsQ0FBQyxnREFBZ0QsRUFBQyxVQUFTLElBQUk7WUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBQyxpREFBaUQ7Z0JBQ3RELEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzthQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBQyxVQUFTLElBQUk7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBQyxxREFBcUQ7Z0JBQzFELEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQzthQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLFFBQVEsRUFBQztJQUVsQixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxRQUFRLEVBQUM7SUFFbEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxFQUFDO0lBRWhCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtdGVzdFwiO1xuaW1wb3J0IGJlYXV0eWxvZyA9IHJlcXVpcmUoXCJiZWF1dHlsb2dcIik7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuaW1wb3J0IFwic2hvdWxkXCJcblxuaW1wb3J0IHNtYXJ0Z2l0ID0gcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXhcIik7XG5cbmRlc2NyaWJlKFwic21hcnRnaXRcIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLmNsb25lXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgY2xvbmUgYSByZXBvc2l0b3J5IHVzaW5nIHNzaCBhbmQgc3Noa2V5XCIsZnVuY3Rpb24oZG9uZSl7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xuICAgICAgICAgICAgc21hcnRnaXQuY2xvbmUoe1xuICAgICAgICAgICAgICAgIGZyb206XCJnaXRAZ2l0bGFiLmNvbTpzYW5kYm94em9uZS9zYW5kYm94LXRlc3RyZXBvLmdpdFwiLFxuICAgICAgICAgICAgICAgIHRvOnBhdGgucmVzb2x2ZShcIi4vdGVzdC90ZW1wL1wiKVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoXCJzaG91bGQgY2xvbmUgYSByZXBvc2l0b3J5IHVzaW5nIGh0dHBzXCIsZnVuY3Rpb24oZG9uZSl7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xuICAgICAgICAgICAgc21hcnRnaXQuY2xvbmUoe1xuICAgICAgICAgICAgICAgIGZyb206XCJodHRwczovL2dpdGxhYi5jb20vc2FuZGJveHpvbmUvc2FuZGJveC10ZXN0cmVwby5naXRcIixcbiAgICAgICAgICAgICAgICB0bzpwYXRoLnJlc29sdmUoXCIuL3Rlc3QvdGVtcDIvXCIpXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiLmNoZWNrXCIsZnVuY3Rpb24oKXtcblxuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiY29tbWl0XCIsZnVuY3Rpb24oKXtcblxuICAgIH0pO1xuICAgIGRlc2NyaWJlKFwiaW5pdFwiLGZ1bmN0aW9uKCl7XG5cbiAgICB9KTtcbn0pOyJdfQ==
