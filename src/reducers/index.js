import { chatReducer } from "./chatReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  chatState: chatReducer
});
