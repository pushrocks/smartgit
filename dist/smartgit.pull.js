"use strict";
const plugins = require("./smartgit.plugins");
const helpers = require("./smartgit.helpers");
exports.pull = (dirPathArg, sourceArg = "", branchArg = "") => {
    let done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        let err = new Error("smartgit.pull expects a valid git directory");
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    }
    ;
    // if everything is allright proceed
    plugins.shelljs.exec(`(cd ${dirPathArg} && git pull ${sourceArg} ${branchArg})`);
    done.resolve(dirPathArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQucHVsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Z2l0LnB1bGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFFbkMsUUFBQSxJQUFJLEdBQUcsQ0FBQyxVQUFpQixFQUFDLFlBQW1CLEVBQUUsRUFBRSxZQUFtQixFQUFFO0lBQzdFLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBQ0Ysb0NBQW9DO0lBQ3BDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxnQkFBZ0IsU0FBUyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDakYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUMifQ==