import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import WebSocketService from "./services/WebSocketService.js";
import AuthService from "./services/AuthService.js";
import ApiService from "./services/ApiService.js";
import OnlineService from "./services/OnlineService.js";
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
import toastsReducer from "./core/toasts/toastsReducer";
import dashboardReducer from "./scenes/dashboard/dashboardReducer";

const corePersistConfig = {
  key: "core",
  storage,
  blacklist: ["modal", "meta", "auth"]
};

const coreReducer = persistReducer(
  corePersistConfig,
  combineReducers({
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
    meta: metaReducer,
    toasts: toastsReducer
  })
);

const scenesReducer = combineReducers({
  dashboard: dashboardReducer
});

const appPersistConfig = {
  key: "app",
  storage,
  blacklist: ["router", "core"]
};

const appReducer = persistReducer(
  appPersistConfig,
  combineReducers({
    router: routerReducer,
    core: coreReducer,
    scenes: scenesReducer
  })
);

const rootReducer = (state, action) => {
  // clear the state when the user logs out
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
  const persistor = persistStore(store);

  ApiService.init(store);
  WebSocketService.init(store);
  AuthService.init(store, persistor);
  OnlineService.init(store);

  return { store, persistor };
}
