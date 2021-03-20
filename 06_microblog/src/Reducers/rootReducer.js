import { default as posts } from "./postsReducer";
import { default as titles } from "./titlesReducer";
import { combineReducers } from "redux";

export default combineReducers({
  posts,
  titles,
});
