import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class GithubService {
  async getPullRequests(accessToken: string, owner: string, repo: string) {
    const octokit = new Octokit({
      auth: accessToken,
    });

    const { data } = await octokit.pulls.list({
      owner,
      repo,
      state: 'all',
    });

    return data;
  }
}