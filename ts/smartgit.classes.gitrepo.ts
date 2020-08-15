import * as plugins from './smartgit.plugins';

/**
 * class GitRepo allows access to git directories from node
 */
export class GitRepo {
  // STATIC
  /**
   * creates a new GitRepo Instance after cloning a project
   */
  public static async fromCloningIntoDir(fromArg: string, toArg: string): Promise<GitRepo> {
    const dirArg = plugins.path.resolve(toArg);
    const ngRespository = await plugins.nodegit.Clone.clone(fromArg, toArg, {
      bare: 0,
      checkoutBranch: 'master',
    });
    return new GitRepo(ngRespository);
  }

  public static async fromCreatingRepoInDir(dirArg: string): Promise<GitRepo> {
    dirArg = plugins.path.resolve(dirArg);
    const ngRepository = await plugins.nodegit.Repository.init(dirArg, 0);
    return new GitRepo(ngRepository);
  }

  public static async fromOpeningRepoDir(dirArg: string) {
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
  public async listRemotes(): Promise<plugins.nodegit.Remote[]> {
    return this.nodegitRepo.getRemotes();
  }

  /**
   * ensures the existance of a remote within a repository
   * @param remoteNameArg
   * @param remoteUrlArg
   */
  public async ensureRemote(remoteNameArg: string, remoteUrlArg: string): Promise<void> {
    const existingUrl = await this.getUrlForRemote(remoteNameArg);
    if (existingUrl === remoteUrlArg) {
      return;
    }
    if (existingUrl) {
      await plugins.nodegit.Remote.delete(this.nodegitRepo, remoteNameArg);
    }
    await plugins.nodegit.Remote.create(this.nodegitRepo, remoteNameArg, remoteUrlArg);
  }

  /**
   * gets the url for a specific remote
   */
  public async getUrlForRemote(remoteName: string): Promise<string> {
    const ngRemote = await this.nodegitRepo.getRemote(remoteName);
    if (ngRemote) {
      return ngRemote.url();
    } else {
      return null;
    }
  }

  public async pushBranchToRemote(branchName: string, remoteName: string) {
    await this.nodegitRepo.checkoutBranch(branchName);
    const ngRemote = await this.nodegitRepo.getRemote(remoteName);
    ngRemote.push([branchName]);
  }
}
