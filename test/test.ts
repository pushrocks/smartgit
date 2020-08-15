import { tap, expect } from '@pushrocks/tapbundle';
import * as smartgit from '../ts/index';

import * as path from 'path';

const testRepoDir = path.join(__dirname, '../.nogit/testrepo');

tap.test('should create a new repo at .nogit', async () => {
  const gitRepo = await smartgit.GitRepo.fromCreatingRepoInDir(testRepoDir);
});

tap.start();
