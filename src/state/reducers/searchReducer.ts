import { SearchActionTypes } from "state/action-types";
import { searchState, SearchActions } from "state/types";

const initialState = {
    searchText: '',
    users: [],
    history: []
}
const reducer = (state: searchState = initialState, action: SearchActions) => {
    switch (action.type) {
        case SearchActionTypes.SEARCH_TEXT_CHANGE:
            return {...state, searchText: action.payload};
        case SearchActionTypes.SEARCH_TEXT_CLEAR:
            return {...state, searchText: ''};
        case SearchActionTypes.SEARCH_DATA_CHANGE:
            return {...state, users: action.payload};
        case SearchActionTypes.SEARCH_ERROR:
            return {...state, error: action.payload};
        case SearchActionTypes.ADD_SEARCH_ITEM:
            const newHistoryItem = {
                searchTerm: action.payload,
                timestamp: Date.now()
            }
            return {...state, history: [newHistoryItem, ...state.history]};
        case SearchActionTypes.CLEAR_HISTORY:
            return {...state, history: []};
        default:
            return state;
    }
}
export default reducer;