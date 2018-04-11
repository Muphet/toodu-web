import { push } from "react-router-redux";

export function loginSuccess(field, value) {
  return push("/");
}
