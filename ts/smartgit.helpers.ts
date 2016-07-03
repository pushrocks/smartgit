import * as plugins from "./smartgit.plugins";

export let isGitDirectory = (dirPathArg):boolean => {
    try {
        return plugins.smartfile.fs.isDirectory(
            plugins.path.join(dirPathArg,".git")
        );
    }
    catch(err){
        return false;
    }
}