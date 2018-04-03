import { OPEN_MODAL, CLOSE_MODAL } from "./dashboardConstants";
import dashboardModalRootReducer
  from "./components/dashboardModalRoot/dashboardModalRootReducer";

const defaultState = {
  activeModal: null,
  modals: {}
};

export default function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, activeModal: action.modal };
    case CLOSE_MODAL:
      return { ...state, activeModal: null };
    default:
      return { ...state, modals: dashboardModalRootReducer(state, action) };
  }
}
