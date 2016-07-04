"use strict";
var plugins = require("./smartgit.plugins");
var helpers = require("./smartgit.helpers");
var add = function (dirPathArg, remoteNameArg, remoteLinkArg) {
    var done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        plugins.beautylog.error("smartgit.remote.add expects a valid git directory");
        done.reject();
        return done.promise;
    }
    ;
    if (!remoteNameArg) {
        plugins.beautylog.error("smartgit.remote.add expects a valid remote name");
        done.reject();
        return done.promise;
    }
    ;
    if (!remoteLinkArg) {
        plugins.beautylog.error("smartgit.remote.add expects a valid remote link");
        done.reject();
        return done.promise;
    }
    ;
    // if everything is all right proceed
    plugins.shelljs.exec("cd " + dirPathArg + " && git remote add " + remoteNameArg + " " + remoteLinkArg);
    exports.remote.list(dirPathArg);
    done.resolve();
    return done.promise;
};
var check = function (dirPathArg, remoteNameArg, remoteLinkArg) {
};
var list = function (dirPathArg) {
    var done = plugins.Q.defer();
    var remotes = {};
    if (!helpers.isGitDirectory(dirPathArg)) {
        plugins.beautylog.error("smartgit.remote.list expects a valid git directory");
        done.reject();
        return done.promise;
    }
    ;
    // if  everything is all right proceed
    plugins.shelljs.exec("cd " + dirPathArg + " && git remote -v").stdout;
    done.resolve(remotes);
    return done.promise;
};
var remove = function (dirPathArg) {
    var done = plugins.Q.defer();
    if (!helpers.isGitDirectory(dirPathArg)) {
        plugins.beautylog.error("smartgit.remote.remove expects a valid git directory");
        done.reject();
        return done.promise;
    }
    ;
    // if everything is all right 
};
exports.remote = {
    add: add,
    list: list,
    remove: remove
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQucmVtb3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRnaXQucmVtb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxvQkFBb0IsQ0FBQyxDQUFBO0FBQzlDLElBQVksT0FBTyxXQUFNLG9CQUFvQixDQUFDLENBQUE7QUFFOUMsSUFBSSxHQUFHLEdBQUcsVUFBQyxVQUFVLEVBQUMsYUFBb0IsRUFBRSxhQUFvQjtJQUM1RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDcEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUNGLEVBQUUsQ0FBQSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNoQixPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBQ0YsRUFBRSxDQUFBLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUFBLENBQUM7SUFDRixxQ0FBcUM7SUFDckMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBTSxVQUFVLDJCQUFzQixhQUFhLFNBQUksYUFBZSxDQUFDLENBQUM7SUFDN0YsY0FBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRixJQUFJLEtBQUssR0FBRyxVQUFDLFVBQWlCLEVBQUUsYUFBb0IsRUFBRSxhQUFhO0FBRW5FLENBQUMsQ0FBQTtBQUVELElBQUksSUFBSSxHQUFHLFVBQUMsVUFBVTtJQUNsQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixFQUFFLENBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUFBLENBQUM7SUFDRixzQ0FBc0M7SUFDdEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBTSxVQUFVLHNCQUFtQixDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUYsSUFBSSxNQUFNLEdBQUcsVUFBQyxVQUFpQjtJQUMzQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDcEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUNGLDhCQUE4QjtBQUNsQyxDQUFDLENBQUE7QUFFVSxjQUFNLEdBQUc7SUFDaEIsR0FBRyxFQUFFLEdBQUc7SUFDUixJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUEifQ==