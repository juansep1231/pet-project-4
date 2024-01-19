export interface GitHubResponse {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: Date;
  updated_at: string;
  pushed_at: Date;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: null | string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: License | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: Visibility;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: DefaultBranch;
  permissions: Permissions;
}

export enum DefaultBranch {
  Main = "main",
  Master = "master",
}

export interface License {
  key: Key;
  name: Name;
  spdx_id: SpdxID;
  url: string;
  node_id: LicenseNodeID;
}

export enum Key {
  Apache20 = "apache-2.0",
  MIT = "mit",
}

export enum Name {
  ApacheLicense20 = "Apache License 2.0",
  MITLicense = "MIT License",
}

export enum LicenseNodeID {
  MDc6TGljZW5ZZTEz = "MDc6TGljZW5zZTEz",
  MDc6TGljZW5ZZTI = "MDc6TGljZW5zZTI=",
}

export enum SpdxID {
  Apache20 = "Apache-2.0",
  MIT = "MIT",
}

export interface Owner {
  login: Login;
  id: number;
  node_id: OwnerNodeID;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: GistsURL;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: EventsURL;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersStackbuildersEventsPrivacy = "https://api.github.com/users/stackbuilders/events{/privacy}",
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersStackbuildersGistsGistID = "https://api.github.com/users/stackbuilders/gists{/gist_id}",
}

export enum Login {
  Stackbuilders = "stackbuilders",
}

export enum OwnerNodeID {
  MDEyOk9YZ2FuaXphdGlvbjUyNjc1NQ = "MDEyOk9yZ2FuaXphdGlvbjUyNjc1NQ==",
}

export enum Type {
  Organization = "Organization",
}

export interface Permissions {
  admin: boolean;
  maintain: boolean;
  push: boolean;
  triage: boolean;
  pull: boolean;
}

export enum Visibility {
  Public = "public",
}

export interface Repository {
  name: string;
  stargazers_count: number;
  updated_at: string;
}
