import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";
import data from "./reducers/dataReducer";
import searchData from "./reducers/searchReducer";

export default createStore(
    combineReducers({
        math,
        user,
        data, 
        searchData
    }),
    {},
    applyMiddleware(logger(), thunk, promise())
);