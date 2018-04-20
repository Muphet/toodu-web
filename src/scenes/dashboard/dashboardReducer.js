import { OPEN_MODAL, CLOSE_MODAL } from "./dashboardConstants";

const defaultState = {
  activeModal: null
};

export default function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, activeModal: action.modal };
    case CLOSE_MODAL:
      return { ...state, activeModal: null };
    default:
      return state;
  }
}
