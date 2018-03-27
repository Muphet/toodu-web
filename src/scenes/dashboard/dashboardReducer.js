import nameReducer from "./components/name/nameReducer";

export default function dashboardReducer(state = {}, action) {
  return {
    name: nameReducer(state.name, action)
  };
}
