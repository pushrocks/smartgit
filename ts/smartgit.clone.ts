import "typings-global"
import plugins = require("./smartgit.plugins");
import SmartgitCheck = require("./smartgit.check");

export let clone = (optionsArg: {
    from: string,
    to: string,
    key?: string,
    keyPath?: string,
    keyPassphrase?: string
}) => {
    let done = plugins.Q.defer();
    plugins.smartfile.fs.ensureDir(optionsArg.to);
    plugins.shelljs.exec(`cd ${optionsArg.to} && git clone ${optionsArg.from} .`);
    done.resolve();
    return done.promise;
};
