/// <reference path="./typings/main.d.ts" />

import plugins = require("./smartgit.plugins");
import SmartgitCheck = require("./smartgit.check");
import SmartgitClone = require("./smartgit.clone");
import SmartgitCommit = require("./smartgit.commit");
import SmartgitInit = require("./smartgit.init");

var smartgit:any = {};
smartgit.clone = SmartgitClone;
smartgit.commit = SmartgitCommit;
smartgit.check = SmartgitCheck;
smartgit.init = SmartgitInit;


module.exports = smartgit;
