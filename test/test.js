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
                from: "git@github.com:pushrocks/docs.git",
                to: path.resolve("./test/temp/")
            }).then(function () {
                done();
            });
        });
        it("should clone a repository using https", function (done) {
            this.timeout(10000);
            smartgit.clone({
                from: "https://github.com/pushrocks/docs.git",
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFFdEIsSUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsUUFBTyxRQUVQLENBQUMsQ0FGYztBQUVmLElBQU8sUUFBUSxXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBRTNDLFFBQVEsQ0FBQyxVQUFVLEVBQUM7SUFDaEIsUUFBUSxDQUFDLFFBQVEsRUFBQztRQUNkLEVBQUUsQ0FBQyxnREFBZ0QsRUFBQyxVQUFTLElBQUk7WUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBQyxtQ0FBbUM7Z0JBQ3hDLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzthQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyx1Q0FBdUMsRUFBQyxVQUFTLElBQUk7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBQyx1Q0FBdUM7Z0JBQzVDLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQzthQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLFFBQVEsRUFBQztJQUVsQixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxRQUFRLEVBQUM7SUFFbEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxFQUFDO0lBRWhCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtdGVzdFwiO1xuaW1wb3J0IGJlYXV0eWxvZyA9IHJlcXVpcmUoXCJiZWF1dHlsb2dcIik7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuaW1wb3J0IFwic2hvdWxkXCJcblxuaW1wb3J0IHNtYXJ0Z2l0ID0gcmVxdWlyZShcIi4uL2Rpc3QvaW5kZXhcIik7XG5cbmRlc2NyaWJlKFwic21hcnRnaXRcIixmdW5jdGlvbigpe1xuICAgIGRlc2NyaWJlKFwiLmNsb25lXCIsZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoXCJzaG91bGQgY2xvbmUgYSByZXBvc2l0b3J5IHVzaW5nIHNzaCBhbmQgc3Noa2V5XCIsZnVuY3Rpb24oZG9uZSl7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoMTAwMDApO1xuICAgICAgICAgICAgc21hcnRnaXQuY2xvbmUoe1xuICAgICAgICAgICAgICAgIGZyb206XCJnaXRAZ2l0aHViLmNvbTpwdXNocm9ja3MvZG9jcy5naXRcIixcbiAgICAgICAgICAgICAgICB0bzpwYXRoLnJlc29sdmUoXCIuL3Rlc3QvdGVtcC9cIilcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KFwic2hvdWxkIGNsb25lIGEgcmVwb3NpdG9yeSB1c2luZyBodHRwc1wiLGZ1bmN0aW9uKGRvbmUpe1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0KDEwMDAwKTtcbiAgICAgICAgICAgIHNtYXJ0Z2l0LmNsb25lKHtcbiAgICAgICAgICAgICAgICBmcm9tOlwiaHR0cHM6Ly9naXRodWIuY29tL3B1c2hyb2Nrcy9kb2NzLmdpdFwiLFxuICAgICAgICAgICAgICAgIHRvOnBhdGgucmVzb2x2ZShcIi4vdGVzdC90ZW1wMi9cIilcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCIuY2hlY2tcIixmdW5jdGlvbigpe1xuXG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCJjb21taXRcIixmdW5jdGlvbigpe1xuXG4gICAgfSk7XG4gICAgZGVzY3JpYmUoXCJpbml0XCIsZnVuY3Rpb24oKXtcblxuICAgIH0pO1xufSk7Il19
