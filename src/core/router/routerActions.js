import { push } from "react-router-redux";

export function navigate(path) {
  return push(path);
}
