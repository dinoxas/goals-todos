import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import todos from "./todos";
import goals from "./goals";

export default combineReducers({
  todos,
  goals,
  loadingBar: loadingBarReducer
});
