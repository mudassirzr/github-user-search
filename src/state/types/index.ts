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
}
export type UserDetailsObject = {
    [key: string]: UsersDetail
}
export type UserActions = {
    type: UserActionTypes.USER_DATA_CHANGE | UserActionTypes.USER_ERROR
    payload: UsersDetail
}