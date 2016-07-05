/// <reference types="q" />
import plugins = require("./smartgit.plugins");
export declare let clone: (optionsArg: {
    from: string;
    to: string;
    key?: string;
    keyPath?: string;
    keyPassphrase?: string;
}) => plugins.Q.Promise<{}>;
