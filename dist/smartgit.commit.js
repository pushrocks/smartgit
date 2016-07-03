"use strict";
var plugins = require("./smartgit.plugins");
exports.commit = function (dirPathArg, commitMessage) {
    var done = plugins.Q.defer();
    if (!plugins.smartfile.fs.isDirectory(plugins.path.join(dirPathArg, ".git"))) {
        plugins.beautylog.error("smartgit.commit expects a valid git directory");
        done.reject();
        return done.promise;
    }
    ;
    // if everything is all right proceed
    plugins.shelljs.exec("git commit -m \"" + commitMessage + "\"");
    done.resolve();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuY29tbWl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRnaXQuY29tbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBR25DLGNBQU0sR0FBRyxVQUFDLFVBQWlCLEVBQUMsYUFBb0I7SUFDdkQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDeEUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUNGLHFDQUFxQztJQUNyQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBa0IsYUFBYSxPQUFHLENBQUMsQ0FBQztJQUN6RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUMifQ==