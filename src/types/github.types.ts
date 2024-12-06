export interface GithubUser {
  id: string;
  login: string;
  name: string;
  email: string;
  avatar_url: string;
}

export interface PullRequest {
  id: number;
  number: number;
  title: string;
  state: 'open' | 'closed';
  user: GithubUser;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  merged_at: string | null;
}