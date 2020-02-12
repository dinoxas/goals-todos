import API from "goals-todos-api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_DATA = "RECEIVE_DATA";

function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals
  };
}

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return Promise.all([API.fetchTodos(), API.fetchGoals()]).then(
      ([todos, goals]) => {
        dispatch(receiveData(todos, goals));
        dispatch(hideLoading());
      }
    );
  };
}
