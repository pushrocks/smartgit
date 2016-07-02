"use strict";
require("typings-global");
var plugins = require("./smartgit.plugins");
exports.clone = function (optionsArg) {
    var done = plugins.Q.defer();
    plugins.smartfile.fs.ensureDir(optionsArg.to);
    plugins.shelljs.exec("cd " + optionsArg.to + " && git clone " + optionsArg.from + " .");
    done.resolve();
    return done.promise;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRnaXQuY2xvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGdpdC5jbG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBTyxnQkFDUCxDQUFDLENBRHNCO0FBQ3ZCLElBQU8sT0FBTyxXQUFXLG9CQUFvQixDQUFDLENBQUM7QUFHcEMsYUFBSyxHQUFHLFVBQUMsVUFNbkI7SUFDRyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBTSxVQUFVLENBQUMsRUFBRSxzQkFBaUIsVUFBVSxDQUFDLElBQUksT0FBSSxDQUFDLENBQUM7SUFDOUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsQ0FBQyxDQUFDIn0=