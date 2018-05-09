import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import WebSocketService from "./services/WebSocketService.js";
import AuthService from "./services/AuthService.js";
import ApiService from "./services/ApiService.js";
import { CHANGE_AUTHENTICATED } from "./core/auth/authConstants";

import authReducer from "./core/auth/authReducer";
import teamsReducer from "./core/teams/teamsReducer";
import usersReducer from "./core/users/usersReducer";
import projectsReducer from "./core/projects/projectsReducer";
import tasksReducer from "./core/tasks/tasksReducer";
import subTasksReducer from "./core/subTasks/subTasksReducer";
import commentsReducer from "./core/comments/commentsReducer";
import starsReducer from "./core/stars/starsReducer";
import followsReducer from "./core/follows/followsReducer";
import modalReducer from "./core/modal/modalReducer";
import notificationsReducer from "./core/notifications/notificationsReducer";
import metaReducer from "./core/meta/metaReducer";
import dashboardReducer from "./scenes/dashboard/dashboardReducer";

const appReducer = combineReducers({
  router: routerReducer,
  core: combineReducers({
    auth: authReducer,
    team: teamsReducer,
    users: usersReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    subTasks: subTasksReducer,
    comments: commentsReducer,
    stars: starsReducer,
    follows: followsReducer,
    modal: modalReducer,
    notifications: notificationsReducer,
    meta: metaReducer
  }),
  scenes: combineReducers({
    dashboard: dashboardReducer
  })
});

const rootReducer = (state, action) => {
  if (action.type === CHANGE_AUTHENTICATED) {
    if (!action.authenticated) {
      state = undefined;
    }
  }
  return appReducer(state, action);
};

export default function configureStore(history, initialState = {}) {
  const enhancers = compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, initialState, enhancers);

  ApiService.init(store);
  WebSocketService.init(store);
  AuthService.init(store);

  return store;
}
