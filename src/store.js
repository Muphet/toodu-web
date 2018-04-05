import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import WebSocketService from "./services/WebSocketService.js";

import projectsReducer from "./core/projects/projectsReducer";
import authReducer from "./scenes/auth/authReducer";
import dashboardReducer from "./scenes/dashboard/dashboardReducer";

const rootReducer = combineReducers({
  core: combineReducers({
    projects: projectsReducer
  }),
  scenes: combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer
  })
});

export default function configureStore(initialState = {}) {
  const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, initialState, enhancers);

  WebSocketService.init(store);

  return store;
}
