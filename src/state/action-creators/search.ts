import { SearchActionTypes } from "state/action-types";
import { Dispatch } from "redux";
import { Action, ClearHistoryAction, SearchHistoryAction, SearchItemsChangeAction, User } from "state/types";

export const searchTermChange = (text: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(
            {
                type: SearchActionTypes.SEARCH_TEXT_CHANGE,
                payload: text
            }
        )
    }
}

export const clearSearch = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(
            {
                type: SearchActionTypes.SEARCH_TEXT_CLEAR,
            }
        )
    }
}

export const setUsers = (items: User[]) => {
    return (dispatch: Dispatch<SearchItemsChangeAction>) => {
        dispatch(
            {
                type: SearchActionTypes.SEARCH_DATA_CHANGE,
                payload: items
            }
        ) 
    }
}

export const addSearchTermToHistory = (text: string) => {
    return (dispatch: Dispatch<SearchHistoryAction>) => {
        dispatch(
            {
                type: SearchActionTypes.ADD_SEARCH_ITEM,
                payload: text
            }
        ) 
    }
}
export const clearHistory = () => {
    return (dispatch: Dispatch<ClearHistoryAction>) => {
        dispatch(
            {
                type: SearchActionTypes.CLEAR_HISTORY
            }
        ) 
    }
}