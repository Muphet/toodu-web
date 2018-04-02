import { OPEN_DIALOG, CLOSE_DIALOG } from "./dialogConstants";

const defaultState = {
  open: false,
  dialogType: null
};

export default function dialogReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_DIALOG:
      return { open: true, dialogType: action.dialogType };
    case CLOSE_DIALOG:
      return defaultState;
    default:
      return state;
  }
}
