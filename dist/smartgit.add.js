"use strict";
var plugins = require("./smartgit.plugins");
var helpers = require("./smartgit.helpers");
var addAll = function (dirPathArg) {
    var done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        plugins.beautylog.error("smartgit.add expects a valid git directory!");
        done.reject();
        return done.promise;
    }
    ;
    // if everything is ok proceed
    plugins.shelljs.exec("(cd " + dirPathArg + " && git add -A && git status)");
    done.resolve(dirPathArg);
    return done.promise;
};
exports.add = {
    addAll: addAll
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRnaXQuYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBQzlDLElBQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFFOUMsSUFBSSxNQUFNLEdBQUcsVUFBQyxVQUFpQjtJQUMzQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDcEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUNGLDhCQUE4QjtJQUM5QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFPLFVBQVUsa0NBQStCLENBQUMsQ0FBQztJQUN2RSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVTLFdBQUcsR0FBRztJQUNiLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUEifQ==