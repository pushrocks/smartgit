/// <reference path="../ts/typings/main.d.ts" />
var smartgit = require("../dist/index.js");
var beautylog = require("beautylog");
var path = require("path");
var should = require("should");
describe("smartgit", function () {
    describe(".clone", function () {
        it("should clone a repository", function (done) {
            this.timeout(10000);
            smartgit.clone({
                from: "https://github.com/pushrocks/docs.git",
                to: path.resolve("./test/temp/")
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQzNDLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRS9CLFFBQVEsQ0FBQyxVQUFVLEVBQUM7SUFDaEIsUUFBUSxDQUFDLFFBQVEsRUFBQztRQUNkLEVBQUUsQ0FBQywyQkFBMkIsRUFBQyxVQUFTLElBQUk7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNYLElBQUksRUFBQyx1Q0FBdUM7Z0JBQzVDLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQzthQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNKLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLFFBQVEsRUFBQztJQUVsQixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxRQUFRLEVBQUM7SUFFbEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsTUFBTSxFQUFDO0lBRWhCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90cy90eXBpbmdzL21haW4uZC50c1wiIC8+XG5sZXQgc21hcnRnaXQgPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleC5qc1wiKTtcbmxldCBiZWF1dHlsb2cgPSByZXF1aXJlKFwiYmVhdXR5bG9nXCIpO1xubGV0IHBhdGggPSByZXF1aXJlKFwicGF0aFwiKTtcbmxldCBzaG91bGQgPSByZXF1aXJlKFwic2hvdWxkXCIpO1xuXG5kZXNjcmliZShcInNtYXJ0Z2l0XCIsZnVuY3Rpb24oKXtcbiAgICBkZXNjcmliZShcIi5jbG9uZVwiLGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KFwic2hvdWxkIGNsb25lIGEgcmVwb3NpdG9yeVwiLGZ1bmN0aW9uKGRvbmUpe1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0KDEwMDAwKTtcbiAgICAgICAgICAgIHNtYXJ0Z2l0LmNsb25lKHtcbiAgICAgICAgICAgICAgICBmcm9tOlwiaHR0cHM6Ly9naXRodWIuY29tL3B1c2hyb2Nrcy9kb2NzLmdpdFwiLFxuICAgICAgICAgICAgICAgIHRvOnBhdGgucmVzb2x2ZShcIi4vdGVzdC90ZW1wL1wiKVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBkZXNjcmliZShcIi5jaGVja1wiLGZ1bmN0aW9uKCl7XG5cbiAgICB9KTtcbiAgICBkZXNjcmliZShcImNvbW1pdFwiLGZ1bmN0aW9uKCl7XG5cbiAgICB9KTtcbiAgICBkZXNjcmliZShcImluaXRcIixmdW5jdGlvbigpe1xuXG4gICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
