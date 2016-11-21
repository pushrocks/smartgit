"use strict";
const plugins = require("./smartgit.plugins");
const helpers = require("./smartgit.helpers");
let addAll = (dirPathArg) => {
    let done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        let err = new Error("smartgit.add expects a valid git directory!");
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    }
    ;
    // if everything is ok proceed
    plugins.shelljs.exec(`(cd ${dirPathArg} && git add -A && git status)`);
    done.resolve(dirPathArg);
    return done.promise;
};
exports.add = {
    addAll: addAll
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRnaXQuYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7QUFDOUMsOENBQThDO0FBRTlDLElBQUksTUFBTSxHQUFHLENBQUMsVUFBaUI7SUFDM0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3BDLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDbkUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUFBLENBQUM7SUFDRiw4QkFBOEI7SUFDOUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxVQUFVLCtCQUErQixDQUFDLENBQUM7SUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFUyxRQUFBLEdBQUcsR0FBRztJQUNiLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUEifQ==