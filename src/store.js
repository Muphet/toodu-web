import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from "redux-thunk";
import WebSocketService from "./services/WebSocketService.js";

import projectsReducer from "./core/projects/projectsReducer";
import dashboardReducer from "./scenes/dashboard/dashboardReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  core: combineReducers({
    projects: projectsReducer
  }),
  scenes: combineReducers({
    dashboard: dashboardReducer
  })
});

export default function configureStore(history, initialState = {}) {
  const enhancers = compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, initialState, enhancers);

  WebSocketService.init(store);

  return store;
}
