import AuthService from "../../../../services/AuthService";

import {
  UPDATE_FIELD,
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from "./resetPasswordConstants";

export function updateField(field, value) {
  return {
    type: UPDATE_FIELD,
    field,
    value
  };
}

export function resetPassword({ password, passwordConfirmation }) {
  return dispatch => {
    dispatch({ type: RESET_PASSWORD_START });
    AuthService.resetPassword({ password, passwordConfirmation })
      .then(res => {
        dispatch({ type: RESET_PASSWORD_SUCCESS, flash: res.data.message });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: RESET_PASSWORD_ERROR,
          errors: err.response.data.errors.full_messages
        });
      });
  };
}
