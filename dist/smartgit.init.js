"use strict";
var plugins = require("./smartgit.plugins");
exports.init = function (dirPathArg) {
    var done = plugins.Q.defer();
    if (typeof dirPathArg == "undefined") {
        plugins.beautylog.error("smartgit.init requires an absolute directory path!");
        return;
    }
    ;
    plugins.smartfile.fs.ensureDir(dirPathArg);
    plugins.shelljs.exec("(cd " + dirPathArg + " && git init)");
    done.resolve(dirPathArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Z2l0LmluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFFcEMsWUFBSSxHQUFHLFVBQUMsVUFBaUI7SUFDaEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFDOUUsTUFBTSxDQUFDO0lBQ1gsQ0FBQztJQUFBLENBQUM7SUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBTyxVQUFVLGtCQUFlLENBQUMsQ0FBQztJQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQyJ9