import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import messageReducer from "./core/message/messageReducer";
import authReducer from "./scenes/auth/authReducer";
import dashboardReducer from "./scenes/dashboard/dashboardReducer";

const rootReducer = combineReducers({
  core: combineReducers({
    message: messageReducer
  }),
  scenes: combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer
  })
});

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
