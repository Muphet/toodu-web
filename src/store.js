import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

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
  return createStore(rootReducer, initialState, enhancers);
}
