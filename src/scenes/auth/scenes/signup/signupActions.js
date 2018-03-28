import AuthService from "../../../../services/AuthService";

import {
  UPDATE_FIELD,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./signupConstants";

export function updateField(field, value) {
  return {
    type: UPDATE_FIELD,
    field,
    value
  };
}

export function signup(signupData) {
  return dispatch => {
    dispatch({ type: SIGNUP_START });
    AuthService.signup(signupData)
      .then(res => {
        dispatch({ type: SIGNUP_SUCCESS, email: res.data.data.email });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({
          type: SIGNUP_ERROR,
          errors: err.response.data.errors.full_messages
        });
      });
  };
}
