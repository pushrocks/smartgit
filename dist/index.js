"use strict";
const q = require("q");
const plugins = require("./smartgit.plugins");
const smartgit_classes_gitrepo_1 = require("./smartgit.classes.gitrepo");
exports.GitRepo = smartgit_classes_gitrepo_1.GitRepo;
/**
 * creates a new GitRepo Instance after cloning a project
 */
exports.createRepoFromClone = (fromArg, toArg) => {
    let done = q.defer();
    plugins.smartfile.fs.ensureDir(toArg);
    plugins.shelljs.exec(`git clone ${fromArg} ${toArg}`);
    let newRepo = new smartgit_classes_gitrepo_1.GitRepo(toArg);
    done.resolve(newRepo);
    return done.promise;
};
/**
 * creates a new GitRepo instance after initializing a new Git Repository
 */
exports.createRepoFromInit = (destinationDirArg) => {
    let done = q.defer();
    plugins.smartfile.fs.ensureDir(destinationDirArg);
    plugins.shelljs.exec(`cd ${destinationDirArg} && git init`);
    let newRepo = new smartgit_classes_gitrepo_1.GitRepo(destinationDirArg);
    done.resolve(newRepo);
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdUJBQXNCO0FBQ3RCLDhDQUErQztBQUUvQyx5RUFBb0Q7QUFFaEQscURBQU87QUFHWDs7R0FFRztBQUNRLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxPQUFlLEVBQUUsS0FBYTtJQUM1RCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFXLENBQUE7SUFDN0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsT0FBTyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDckQsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQ0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7QUFDdkIsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLGtCQUFrQixHQUFHLENBQUMsaUJBQXlCO0lBQ3RELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQVcsQ0FBQTtJQUM3QixPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLGlCQUFpQixjQUFjLENBQUMsQ0FBQTtJQUMzRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGtDQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQSJ9