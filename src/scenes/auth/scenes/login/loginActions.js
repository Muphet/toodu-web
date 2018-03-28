import AuthService from "../../../../services/AuthService";
import HistoryService from "../../../../services/HistoryService";

import {
  UPDATE_FIELD,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "./loginConstants";

export function updateField(field, value) {
  return {
    type: UPDATE_FIELD,
    field,
    value
  };
}

export function login({ email, password }) {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    AuthService.login(email, password)
      .then(res => {
        HistoryService.push("/");
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, errors: err.response.data.errors });
      });
  };
}
