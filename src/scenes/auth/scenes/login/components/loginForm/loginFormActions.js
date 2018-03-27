import ApiService from "../../../../../../services/ApiService";
import HistoryService from "../../../../../../services/HistoryService";

import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "./loginFormConstants";

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    email
  };
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    password
  };
}

export function login(email, password) {
  return dispatch => {
    dispatch({ type: LOGIN_START });
    ApiService.post("/auth/sign_in", { email, password })
      .then(res => {
        HistoryService.push("/");
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, errors: err.response.data.errors });
      });
  };
}
