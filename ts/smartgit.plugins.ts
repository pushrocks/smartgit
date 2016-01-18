/// <reference path="./index.ts" />
module SmartgitPlugins {
    export var init = function() {
        var plugins = {
            path: require("path"),
            beautylog: require("beautylog"),
            nodegit: require("nodegit"),
            Q: require("q")
        };
        return plugins;
    }
}