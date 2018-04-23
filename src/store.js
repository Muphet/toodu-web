import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import WebSocketService from "./services/WebSocketService.js";

import teamsReducer from "./core/teams/teamsReducer";
import usersReducer from "./core/users/usersReducer";
import projectsReducer from "./core/projects/projectsReducer";
import tasksReducer from "./core/tasks/tasksReducer";
import subTasksReducer from "./core/subTasks/subTasksReducer";
import commentsReducer from "./core/comments/commentsReducer";
import starsReducer from "./core/stars/starsReducer";
import dashboardReducer from "./scenes/dashboard/dashboardReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  core: combineReducers({
    team: teamsReducer,
    users: usersReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    subTasks: subTasksReducer,
    comments: commentsReducer,
    stars: starsReducer
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
