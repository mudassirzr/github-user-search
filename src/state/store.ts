import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";
export const store = configureStore(
    { 
        reducer: reducers,
        preloadedState: {},
        middleware: [thunk] as const 
    } 
)