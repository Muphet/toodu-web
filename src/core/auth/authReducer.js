import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CHANGE_AUTHENTICATED, UPDATE_CURRENT_USER } from "./authConstants";
import { USER_UPDATED } from "../users/usersConstants";

const defaultState = {
  authenticated: false,
  currentUser: null
};

export function authReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_AUTHENTICATED:
      return { ...state, authenticated: action.authenticated };
    case UPDATE_CURRENT_USER:
      return { ...state, currentUser: action.user };
    case USER_UPDATED:
      if (state.currentUser && action.user.id === state.currentUser.id) {
        return { ...state, currentUser: action.user };
      }
      return state;
    default:
      return state;
  }
}

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["currentUser"]
};

export default persistReducer(authPersistConfig, authReducer);
