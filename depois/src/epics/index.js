import { combineEpics } from "redux-observable";
import { searchEpic } from "./search";

export const rootEpic = combineEpics(searchEpic);
