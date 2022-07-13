import { ActionTypes } from "state/action-types";
import { searchState, Actions } from "state/types";

const initialState = {
    searchText: '',
    users: [],
    history: []
}
const reducer = (state: searchState = initialState, action: Actions) => {
    switch (action.type) {
        case ActionTypes.SEARCH_TEXT_CHANGE:
            return {...state, searchText: action.payload};
        case ActionTypes.SEARCH_TEXT_CLEAR:
            return {...state, searchText: ''};
        case ActionTypes.SEARCH_DATA_CHANGE:
            return {...state, users: action.payload};
        case ActionTypes.SEARCH_ERROR:
            return {...state, error: action.payload};
        case ActionTypes.ADD_SEARCH_ITEM:
            const newHistoryItem = {
                searchTerm: action.payload,
                timestamp: Date.now()
            }
            return {...state, history: [newHistoryItem, ...state.history]};
        case ActionTypes.CLEAR_HISTORY:
            return {...state, history: []};
        default:
            return state;
    }
}
export default reducer;