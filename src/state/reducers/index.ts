import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "state/reducers/searchReducer";
const reducers = combineReducers(
    {
        search: searchReducer,
    }
)
export default reducers;
export type State = ReturnType<typeof reducers>;