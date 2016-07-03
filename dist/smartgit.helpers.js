"use strict";
var plugins = require("./smartgit.plugins");
exports.isGitDirectory = function (dirPathArg) {
    try {
        return plugins.smartfile.fs.isDirectory(plugins.path.join(dirPathArg, ".git"));
    }
    catch (err) {
        return false;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0Z2l0LmhlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFFbkMsc0JBQWMsR0FBRyxVQUFDLFVBQVU7SUFDbkMsSUFBSSxDQUFDO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUN2QyxDQUFDO0lBQ04sQ0FDQTtJQUFBLEtBQUssQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUM7UUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7QUFDTCxDQUFDLENBQUEifQ==