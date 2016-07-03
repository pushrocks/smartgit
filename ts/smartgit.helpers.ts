import * as plugins from "./smartgit.plugins";

export let isGitDirectory = (dirPathArg):boolean => {
    return plugins.smartfile.fs.isDirectory(
        plugins.path.join(dirPathArg,".git")
    );
}