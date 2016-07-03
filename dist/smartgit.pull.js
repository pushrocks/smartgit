"use strict";
var plugins = require("./smartgit.plugins");
var helpers = require("./smartgit.helpers");
exports.pull = function (dirPathArg, sourceArg, branchArg) {
    if (sourceArg === void 0) { sourceArg = ""; }
    if (branchArg === void 0) { branchArg = ""; }
    var done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        plugins.beautylog.error("smartgit.pull expects a valid git directory");
        done.reject();
        return done.promse;
    }
    ;
    plugins.shelljs.exec("(cd " + dirPathArg + " && git pull " + sourceArg + " " + branchArg + ")");
    done.resolve(dirPathArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQucHVsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Z2l0LnB1bGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFDOUMsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUNuQyxZQUFJLEdBQUcsVUFBQyxVQUFpQixFQUFDLFNBQXFCLEVBQUUsU0FBcUI7SUFBNUMseUJBQXFCLEdBQXJCLGNBQXFCO0lBQUUseUJBQXFCLEdBQXJCLGNBQXFCO0lBQzdFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNwQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFBQSxDQUFDO0lBQ0YsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBTyxVQUFVLHFCQUFnQixTQUFTLFNBQUksU0FBUyxNQUFHLENBQUMsQ0FBQztJQUNqRixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9