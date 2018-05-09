import { CONNECTED, DISCONNECTED, ONLINE, OFFLINE } from "./metaConstants";

const defaultState = {
  connected: false,
  online: navigator.onLine
};

export default function metaReducer(state = defaultState, action) {
  switch (action.type) {
    case CONNECTED:
      return { ...state, connected: true };
    case DISCONNECTED:
      return { ...state, connected: false };
    case ONLINE:
      return { ...state, online: true };
    case OFFLINE:
      return { ...state, online: false };
    default:
      return state;
  }
}
