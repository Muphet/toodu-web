import usersApi from "./usersApi";

import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR
} from "./usersConstants";

export function getUsers() {
  return dispatch => {
    dispatch({ type: GET_USERS_START });
    return usersApi
      .get()
      .then(res => {
        dispatch({ type: GET_USERS_SUCCESS, users: res.data });
        return res.data;
      })
      .catch(err => {
        dispatch({ type: GET_USERS_ERROR });
      });
  };
}

export function getCurrentUser() {
  return dispatch => {
    dispatch({ type: GET_CURRENT_USER_START });
    return usersApi
      .getOne("current")
      .then(res => {
        dispatch({ type: GET_CURRENT_USER_SUCCESS, user: res.data });
        return res.data;
      })
      .catch(err => {
        dispatch({ type: GET_CURRENT_USER_ERROR });
      });
  };
}
