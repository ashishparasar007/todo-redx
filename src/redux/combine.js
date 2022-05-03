import { combineReducers } from "redux";
import { todoReducer } from "./reducers";
export const reducer = combineReducers({
  todos: todoReducer,
});
