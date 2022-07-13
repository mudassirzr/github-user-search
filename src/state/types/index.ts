import { ActionTypes } from "state/action-types"

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
    type: ActionTypes.SEARCH_TEXT_CHANGE | ActionTypes.SEARCH_TEXT_CLEAR | ActionTypes.SEARCH_ERROR
    payload?: string
}
export interface SearchItemsChangeAction {
    type: ActionTypes.SEARCH_DATA_CHANGE
    payload: User[] | []
}
export interface SearchHistoryAction {
    type: ActionTypes.ADD_SEARCH_ITEM
    payload: string
}

export interface ClearHistoryAction {
    type: ActionTypes.CLEAR_HISTORY
}

export type Actions = Action | SearchItemsChangeAction | SearchHistoryAction | ClearHistoryAction

// {
//     "total_count": 1,
//     "incomplete_results": false,
//     "items": [
//       {
        
//       }
//     ]
//   }
  