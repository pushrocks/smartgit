/// <reference types="q" />
import * as q from 'q';
/**
 * class GitRepo allows access to git directories from node
 */
export declare class GitRepo {
    repoBase: string;
    constructor(repoBaseArg: string);
    /**
     * checks if the Repo is valid
     */
    check(): boolean;
    /**
     * stage all files in working directory
     */
    addAll(dirPathArg: string): q.Promise<{}>;
    /**
     * add a remote to the GitRepo
     */
    remoteAdd(remoteNameArg: string, remoteLinkArg: string): q.Promise<{}>;
    /**
     * list remotes for a Gip
     */
    remoteList(): q.Promise<{}>;
    /**
     * remove remote
     */
    remoteRemove(dirPathArg: string): q.Promise<{}>;
    /**
     * commit all files that are currently staged
     */
    commit(commitMessage: string): q.Promise<{}>;
    /**
     * pull latest changes from remote
     */
    pull(sourceArg?: string, branchArg?: string): q.Promise<{}>;
    /**
     * push new commits to remote
     */
    push(remoteNameArg?: string, remoteBranchArg?: string): q.Promise<{}>;
    /**
     * sync
     */
    sync(): void;
    /**
     * get the current status
     */
    status(): q.Promise<{}>;
}
/**
 * creates a new GitRepo Instance after cloning a project
 */
export declare let createRepoFromClone: (fromArg: string, toArg: string) => q.Promise<GitRepo>;
/**
 * creates a new GitRepo instance after initializing a new Git Repository
 */
export declare let createRepoFromInit: (destinationDirArg: string) => void;
