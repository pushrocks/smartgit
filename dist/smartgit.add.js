"use strict";
var plugins = require("./smartgit.plugins");
var helpers = require("./smartgit.helpers");
exports.add = function (dirPathArg) {
    var done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        plugins.beautylog.error("smartgit.add expects a valif git directory!");
        done.reject();
        return done.promise;
    }
    ;
    // if everything is ok proceed
    plugins.shelljs.exec("");
    done.resolve(dirPathArg);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRnaXQuYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBQzlDLElBQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFFbkMsV0FBRyxHQUFHLFVBQUMsVUFBaUI7SUFDL0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUFBLENBQUM7SUFDRiw4QkFBOEI7SUFDOUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUMifQ==