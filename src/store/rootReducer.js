import { combineReducers } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import { catsReducer } from "./reducers/catsReducer";
export const rootReducer = combineReducers({
    category:categoryReducer,
    cats:catsReducer
})