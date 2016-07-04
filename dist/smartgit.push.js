"use strict";
var plugins = require("./smartgit.plugins");
var helpers = require("./smartgit.helpers");
exports.push = function (dirPathArg, remoteNameArg, remoteBranchArg) {
    if (remoteNameArg === void 0) { remoteNameArg = ""; }
    if (remoteBranchArg === void 0) { remoteBranchArg = ""; }
    var done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        plugins.beautylog.error("smartgit.push expects a valid git directory");
        done.reject();
        return done.promise;
    }
    // if everything seems allright proceed
    plugins.shelljs.exec("(cd " + dirPathArg + " && git push " + remoteNameArg + " " + remoteBranchArg + ")");
    done.resolve();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQucHVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Z2l0LnB1c2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFDOUMsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUVuQyxZQUFJLEdBQUcsVUFBQyxVQUFpQixFQUFFLGFBQXlCLEVBQUUsZUFBMkI7SUFBdEQsNkJBQXlCLEdBQXpCLGtCQUF5QjtJQUFFLCtCQUEyQixHQUEzQixvQkFBMkI7SUFDeEYsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNELHVDQUF1QztJQUN2QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFPLFVBQVUscUJBQWdCLGFBQWEsU0FBSSxlQUFlLE1BQUcsQ0FBQyxDQUFDO0lBQzNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9