import ApiService from "../../../../../../services/ApiService";

import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_CONFIRMATION,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_TEAM_NAME,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./signupFormConstants";

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

export function updatePasswordConfirmation(passwordConfirmation) {
  return {
    type: UPDATE_PASSWORD_CONFIRMATION,
    passwordConfirmation
  };
}

export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRST_NAME,
    firstName
  };
}

export function updateLastName(lastName) {
  return {
    type: UPDATE_LAST_NAME,
    lastName
  };
}

export function updateTeamName(teamName) {
  return {
    type: UPDATE_TEAM_NAME,
    teamName
  };
}

export function signup(data) {
  return dispatch => {
    dispatch({ type: SIGNUP_START });
    data.confirm_success_url = "http://localhost:3001/auth/verified";
    ApiService.post("/auth", data)
      .then(res => {
        dispatch({ type: SIGNUP_SUCCESS, email: data.email });
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
