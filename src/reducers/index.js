import { combineReducers } from "redux";
import challengeReducer from "./challengeReducer";

export default combineReducers({ tasks: challengeReducer });
