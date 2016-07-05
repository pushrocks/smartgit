"use strict";
var plugins = require("./smartgit.plugins");
var helpers = require("./smartgit.helpers");
exports.pull = function (dirPathArg, sourceArg, branchArg) {
    if (sourceArg === void 0) { sourceArg = ""; }
    if (branchArg === void 0) { branchArg = ""; }
    var done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        var err = new Error("smartgit.pull expects a valid git directory");
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    }
    ;
    // if everything is allright proceed
    plugins.shelljs.exec("(cd " + dirPathArg + " && git pull " + sourceArg + " " + branchArg + ")");
    done.resolve(dirPathArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQucHVsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Z2l0LnB1bGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFDOUMsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUVuQyxZQUFJLEdBQUcsVUFBQyxVQUFpQixFQUFDLFNBQXFCLEVBQUUsU0FBcUI7SUFBNUMseUJBQXFCLEdBQXJCLGNBQXFCO0lBQUUseUJBQXFCLEdBQXJCLGNBQXFCO0lBQzdFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBQ0Ysb0NBQW9DO0lBQ3BDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQU8sVUFBVSxxQkFBZ0IsU0FBUyxTQUFJLFNBQVMsTUFBRyxDQUFDLENBQUM7SUFDakYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUMifQ==