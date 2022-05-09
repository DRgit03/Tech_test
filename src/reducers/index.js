import { combineReducers } from "redux";
import { postReducer } from "./fetchUserReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  posts: postReducer,
  users: userReducer
});
