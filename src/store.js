import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import WebSocketService from "./services/WebSocketService.js";
import AuthService from "./services/AuthService.js";
import ApiService from "./services/ApiService.js";
import OnlineService from "./services/OnlineService.js";

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
    meta: metaReducer
  })
);

const scenesReducer = combineReducers({
  dashboard: dashboardReducer
});

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["router", "core"]
};

const rootReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    router: routerReducer,
    core: coreReducer,
    scenes: scenesReducer
  })
);

export default function configureStore(history, initialState = {}) {
  const enhancers = compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, initialState, enhancers);
  const persistor = persistStore(store);

  ApiService.init(store);
  WebSocketService.init(store);
  AuthService.init(store);
  OnlineService.init(store);

  return { store, persistor };
}
