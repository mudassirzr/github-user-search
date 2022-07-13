import { combineReducers } from "@reduxjs/toolkit";
import searchReducer from "state/reducers/searchReducer";
import userdetailsReducer from "state/reducers/userDetailsReducer";
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
};

const reducers = combineReducers(
    {
        search: searchReducer,
        users: userdetailsReducer,
    }
)
const persistedReducer = persistReducer(persistConfig, reducers);
export default persistedReducer;
export type State = ReturnType<typeof persistedReducer>;