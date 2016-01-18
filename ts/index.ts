/// <reference path="typings/tsd.d.ts" />
/// <reference path="smartgit.plugins.ts" />
/// <reference path="smartgit.clone.ts" />
/// <reference path="smartgit.init.ts" />
/// <reference path="smartgit.commit.ts" />
/// <reference path="smartgit.check.ts" />

var plugins = SmartgitPlugins.init();

//Build the smartgit object
var smartgit:any = {};
smartgit.clone = SmartgitClone.init();
smartgit.commit = SmartgitCommit.init();
smartgit.check = SmartgitCheck.init();
smartgit.init = SmartgitInit.init();


module.exports = smartgit;
