import AuthService from "../../../../services/AuthService";

import {
  UPDATE_FIELD,
  SEND_RESET_EMAIL_START,
  SEND_RESET_EMAIL_SUCCESS,
  SEND_RESET_EMAIL_ERROR
} from "./forgotPasswordConstants";

export function updateField(field, value) {
  return {
    type: UPDATE_FIELD,
    field,
    value
  };
}

export function sendResetEmail(email) {
  return dispatch => {
    dispatch({ type: SEND_RESET_EMAIL_START });
    AuthService.sendResetEmail(email)
      .then(res => {
        dispatch({ type: SEND_RESET_EMAIL_SUCCESS, flash: res.data.message });
      })
      .catch(err => {
        dispatch({
          type: SEND_RESET_EMAIL_ERROR,
          errors: err.response.data.errors
        });
      });
  };
}
