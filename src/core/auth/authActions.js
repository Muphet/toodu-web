import { CHANGE_AUTHENTICATED } from "./authConstants";

export function changeAuthenticated(authenticated) {
  return {
    type: CHANGE_AUTHENTICATED,
    authenticated
  };
}
