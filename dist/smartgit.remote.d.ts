/// <reference types="q" />
import * as plugins from "./smartgit.plugins";
export declare let remote: {
    add: (dirPathArg: any, remoteNameArg: string, remoteLinkArg: string) => plugins.Q.Promise<{}>;
    list: (dirPathArg: any) => plugins.Q.Promise<{}>;
    remove: (dirPathArg: string) => plugins.Q.Promise<{}>;
};
