"use strict";
const plugins = require("./smartgit.plugins");
const helpers = require("./smartgit.helpers");
exports.push = (dirPathArg, remoteNameArg = "", remoteBranchArg = "") => {
    let done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        let err = new Error("smartgit.push expects a valid git directory");
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    }
    // if everything seems allright proceed
    plugins.shelljs.exec(`(cd ${dirPathArg} && git push ${remoteNameArg} ${remoteBranchArg})`);
    done.resolve();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQucHVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Z2l0LnB1c2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFFbkMsUUFBQSxJQUFJLEdBQUcsQ0FBQyxVQUFpQixFQUFFLGdCQUF1QixFQUFFLEVBQUUsa0JBQXlCLEVBQUU7SUFDeEYsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3BDLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNELHVDQUF1QztJQUN2QyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsZ0JBQWdCLGFBQWEsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9