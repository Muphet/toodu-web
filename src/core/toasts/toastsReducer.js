import UtilService from "../../services/UtilService";
import {
  ADD_TOAST,
  REMOVE_TOAST
} from "./toastsConstants";

const defaultState = [];

export default function toastsReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TOAST:
      return state.concat(action.toast);
    case REMOVE_TOAST:
      return UtilService.removeById(state, action.toast);
    default:
      return state;
  }
}
