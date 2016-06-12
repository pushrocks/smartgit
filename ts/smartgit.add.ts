import "typings-global";
import * as plugins from "./smartgit.plugins";

export let pull = (optionsArg:{path:string,ref?:string}) => {
    if(!optionsArg.ref) optionsArg.ref = "master";
    plugins.nodegit.Repository.open(optionsArg.path);
}
