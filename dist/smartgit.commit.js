"use strict";
const plugins = require("./smartgit.plugins");
const helpers = require("./smartgit.helpers");
exports.commit = (dirPathArg, commitMessage) => {
    let done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        let err = new Error("smartgit.commit expects a valid git directory");
        plugins.beautylog.error(err.message);
        done.reject(err);
        return done.promise;
    }
    ;
    // if everything is all right proceed
    plugins.shelljs.exec(`(cd ${dirPathArg} && git commit -m "${commitMessage}")`);
    done.resolve();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuY29tbWl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRnaXQuY29tbWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7QUFDOUMsOENBQThDO0FBRW5DLFFBQUEsTUFBTSxHQUFHLENBQUMsVUFBaUIsRUFBQyxhQUFvQjtJQUN2RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUNGLHFDQUFxQztJQUNyQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLFVBQVUsc0JBQXNCLGFBQWEsSUFBSSxDQUFDLENBQUM7SUFDL0UsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDIn0=