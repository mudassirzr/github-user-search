import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "state/reducers/searchReducer";
import userdetailsReducer from "state/reducers/userDetailsReducer";
const reducers = combineReducers(
    {
        search: searchReducer,
        users: userdetailsReducer,
    }
)
export default reducers;
export type State = ReturnType<typeof reducers>;