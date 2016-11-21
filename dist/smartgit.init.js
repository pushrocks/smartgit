"use strict";
const plugins = require("./smartgit.plugins");
exports.init = (dirPathArg) => {
    let done = plugins.Q.defer();
    if (typeof dirPathArg == "undefined") {
        let err = new Error("smartgit.init requires an absolute directory path!");
        plugins.beautylog.error(err.message);
        done.reject("err");
        return done.promise;
    }
    ;
    plugins.smartfile.fs.ensureDir(dirPathArg);
    plugins.shelljs.exec(`(cd ${dirPathArg} && git init)`);
    done.resolve(dirPathArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Z2l0LmluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhDQUErQztBQUVwQyxRQUFBLElBQUksR0FBRyxDQUFDLFVBQWlCO0lBQ2hDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0IsRUFBRSxDQUFDLENBQUMsT0FBTyxVQUFVLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNuQyxJQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFBO1FBQ3pFLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBQ0YsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sVUFBVSxlQUFlLENBQUMsQ0FBQztJQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9