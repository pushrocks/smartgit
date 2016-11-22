/// <reference types="q" />
import * as q from 'q';
import { GitRepo } from './smartgit.classes.gitrepo';
export { GitRepo };
/**
 * creates a new GitRepo Instance after cloning a project
 */
export declare let createRepoFromClone: (fromArg: string, toArg: string) => q.Promise<GitRepo>;
/**
 * creates a new GitRepo instance after initializing a new Git Repository
 */
export declare let createRepoFromInit: (destinationDirArg: string) => void;
