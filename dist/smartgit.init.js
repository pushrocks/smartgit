"use strict";
require("typings-global");
var plugins = require("./smartgit.plugins");
module.exports = function () {
    var gitinit = function (dest) {
        if (dest === void 0) { dest = "undefined"; }
        if (dest == "undefined") {
            return; // ...and return function here if not
        }
        var isBare = 0; //lets create a subfolder
        plugins.nodegit.Repository.init(dest, isBare).then(function (repo) {
            // do something with repo here.
        });
    };
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0Z2l0LmluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQ1AsQ0FBQyxDQURzQjtBQUN2QixJQUFPLE9BQU8sV0FBVyxvQkFBb0IsQ0FBQyxDQUFDO0FBRS9DLGlCQUFTO0lBQ0wsSUFBSSxPQUFPLEdBQUcsVUFBUyxJQUF5QjtRQUF6QixvQkFBeUIsR0FBekIsa0JBQXlCO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxDQUFDLHFDQUFxQztRQUNqRCxDQUFDO1FBQ0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMseUJBQXlCO1FBQ3pDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUM3RCwrQkFBK0I7UUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDLENBQUEiLCJmaWxlIjoic21hcnRnaXQuaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtZ2xvYmFsXCJcbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRnaXQucGx1Z2luc1wiKTtcblxuZXhwb3J0ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgZ2l0aW5pdCA9IGZ1bmN0aW9uKGRlc3Q6c3RyaW5nID0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAoZGVzdCA9PSBcInVuZGVmaW5lZFwiKSB7IC8vbGV0cyBjaGVjayBpZiBhIGRlc3RpbmF0aW9uIGlzIGRlZmluZWQuLi5cbiAgICAgICAgICAgIHJldHVybjsgLy8gLi4uYW5kIHJldHVybiBmdW5jdGlvbiBoZXJlIGlmIG5vdFxuICAgICAgICB9XG4gICAgICAgIHZhciBpc0JhcmUgPSAwOyAvL2xldHMgY3JlYXRlIGEgc3ViZm9sZGVyXG4gICAgICAgIHBsdWdpbnMubm9kZWdpdC5SZXBvc2l0b3J5LmluaXQoZGVzdCwgaXNCYXJlKS50aGVuKGZ1bmN0aW9uIChyZXBvKSB7XG4gICAgICAgICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCByZXBvIGhlcmUuXG4gICAgICAgIH0pO1xuICAgIH07XG59Il19
