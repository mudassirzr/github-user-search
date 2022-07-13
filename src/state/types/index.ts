import { SearchActionTypes, UserActionTypes } from "state/action-types"

export type User = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: Boolean,
    score: number
}
export type historyItem = {
    searchTerm: string,
    timestamp: number
}
export type searchState = {
    searchText: string
    users: User[] | []
    history: historyItem[] | []
    error?: string
}
export interface Action {
    type: SearchActionTypes.SEARCH_TEXT_CHANGE | SearchActionTypes.SEARCH_TEXT_CLEAR | SearchActionTypes.SEARCH_ERROR
    payload?: string
}
export interface SearchItemsChangeAction {
    type: SearchActionTypes.SEARCH_DATA_CHANGE
    payload: User[] | []
}
export interface SearchHistoryAction {
    type: SearchActionTypes.ADD_SEARCH_ITEM
    payload: string
}

export interface ClearHistoryAction {
    type: SearchActionTypes.CLEAR_HISTORY
}

export type SearchActions = Action | SearchItemsChangeAction | SearchHistoryAction | ClearHistoryAction

export type RepoDetails = {
    id?: number,
    node_id?: string,
    name?: string,
    full_name?: string,
    private?: Boolean,
    owner?: UsersDetail,
    html_url?: string,
    description?: string | null,
    fork?: Boolean,
    url?: string,
    forks_url?: string,
    keys_url?: string,
    collaborators_url?: string,
    teams_url?: string,
    hooks_url?: string,
    issue_events_url?: string,
    events_url?: string,
    assignees_url?: string,
    branches_url?: string,
    tags_url?: string,
    blobs_url?: string,
    git_tags_url?: string,
    git_refs_url?: string,
    trees_url?: string,
    statuses_url?: string,
    languages_url?: string,
    stargazers_url?: string,
    contributors_url?: string,
    subscribers_url?: string,
    subscription_url?: string,
    commits_url?: string,
    git_commits_url?: string,
    comments_url?: string,
    issue_comment_url?: string,
    contents_url?: string,
    compare_url?: string,
    merges_url?: string,
    archive_url?: string,
    downloads_url?: string,
    issues_url?: string,
    pulls_url?: string,
    milestones_url?: string,
    notifications_url?: string,
    labels_url?: string,
    releases_url?: string,
    deployments_url?: string,
    created_at?: string,
    updated_at?: string,
    pushed_at?: string,
    git_url?: string,
    ssh_url?: string,
    clone_url?: string,
    svn_url?: string,
    homepage?: string,
    size?: number,
    stargazers_count?: number,
    watchers_count?: number,
    language?: string | null,
    has_issues?: Boolean,
    has_projects?: Boolean,
    has_downloads?: Boolean,
    has_wiki?: Boolean,
    has_pages?: Boolean,
    forks_count?: number,
    mirror_url?: string | null,
    archived?: Boolean,
    disabled?: Boolean,
    open_issues_count?: number,
    license?: string | null,
    allow_forking?: Boolean,
    is_template?: Boolean,
    web_commit_signoff_required?: Boolean,
    topics?: string[] | [],
    visibility?: string,
    forks?: number,
    open_issues?: number,
    watchers?: number,
    default_branch?: string
  }

export type UsersDetail = {
    login: string,
    id?: number,
    node_id?: string,
    avatar_url?: string,
    gravatar_id?: string,
    url?: string,
    html_url?: string,
    followers_url?: string,
    following_url?: string,
    gists_url?: string,
    starred_url?: string,
    subscriptions_url?: string,
    organizations_url?: string,
    repos_url?: string,
    events_url?: string,
    received_events_url?: string,
    type?: string,
    site_admin?: Boolean,
    name?: string | null,
    company?: string | null,
    blog?: string,
    location?: string | null,
    email?: string | null,
    hireable?: string | null,
    bio?: string | null,
    twitter_username?: string | null,
    public_repos?: number,
    public_gists?: number,
    followers?: number,
    following?: number,
    created_at?: string,
    updated_at?: string,
    error?: string
    repositories?: RepoDetails[] | []
}
export type UserDetailsObject = {
    [key: string]: UsersDetail
}
export type UserActions = {
    type: UserActionTypes.USER_DATA_CHANGE | UserActionTypes.USER_ERROR
    payload: UsersDetail
}