import * as plugins from "./smartgit.plugins";
import * as helpers from "./smartgit.helpers";

let addRemote = (dirPathArg) => {
    let done = plugins.Q.defer();

};

let removeRemote = () => {

}

export let remote = {
    add: addRemote,
    remove: removeRemote
}