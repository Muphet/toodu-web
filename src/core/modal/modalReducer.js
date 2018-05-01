import { OPEN_MODAL, CLOSE_MODAL } from "./dashboardConstants";

const defaultState = null;

export default function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
