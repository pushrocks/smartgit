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
    const dirArg = plugins.path.resolve(toArg);
    const ngRespository = await plugins.nodegit.Clone.clone(fromArg, toArg, {
      bare: 0,
      checkoutBranch: 'master'
    });
    return new GitRepo(ngRespository);
  }

  public static async createNewRepoInDir(dirArg: string): Promise<GitRepo> {
    dirArg = plugins.path.resolve(dirArg);
    const ngRepository = await plugins.nodegit.Repository.init(dirArg, 0);
    return new GitRepo(ngRepository);
  }

  public static async openRepoAt(dirArg: string) {
    dirArg = plugins.path.resolve(dirArg);
    const ngRepository = await plugins.nodegit.Repository.open(dirArg);
    return new GitRepo(ngRepository);
  }

  // INSTANCE
  public nodegitRepo: plugins.nodegit.Repository;

  constructor(nodegitRepoArg: plugins.nodegit.Repository) {
    this.nodegitRepo = nodegitRepoArg;
  }

  /**
   * lists remotes
   */
  public async listRemotes(): Promise<string[]> {
    return this.nodegitRepo.getRemotes();
  }

  /**
   * gets the url for a specific remote
   */
  public async getUrlForRemote(remoteName: string) {
    const ngRemote = await this.nodegitRepo.getRemote(remoteName);
    return ngRemote.url;
  }

  public async pushBranchToRemote(branchName: string, remoteName: string) {
    await this.nodegitRepo.checkoutBranch(branchName);
    const ngRemote = await this.nodegitRepo.getRemote(remoteName);
    ngRemote.push([branchName]);
  }
}
