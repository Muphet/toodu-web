import newProjectReducer from "./components/newProject/newProjectReducer";

export default function authReducer(state = {}, action) {
  return {
    newProject: newProjectReducer(state.newProject, action)
  };
}
