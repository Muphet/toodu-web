import { CONNECTED, DISCONNECTED } from "./metaConstants";

const defaultState = {
  connected: false
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case CONNECTED:
      return { ...state, connected: true };
    case DISCONNECTED:
      return { ...state, connected: false };
    default:
      return state;
  }
}
