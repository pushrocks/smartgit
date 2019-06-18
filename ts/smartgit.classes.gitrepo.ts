import * as plugins from './smartgit.plugins';

/**
 * class GitRepo allows access to git directories from node
 */
export class GitRepo {
  // STATIC
  /**
   * creates a new GitRepo Instance after cloning a project
   */
  public static async createRepoFromClone(fromArg: string, toArg: string): Promise<GitRepo> {
    return new GitRepo();
  }

  /**
   * creates a new GitRepo instance after initializing a new Git Repository
   */
  public static async createRepoFromInit(destinationDirArg: string): Promise<GitRepo> {
    return new GitRepo();
  }

  // INSTANCE
  nodegitRepo;
}
