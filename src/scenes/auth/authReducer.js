import loginReducer from "./scenes/login/loginReducer";
import signupReducer from "./scenes/signup/signupReducer";

export default function dashboardReducer(state = {}, action) {
  return {
    login: loginReducer(state.login, action),
    signup: signupReducer(state.signup, action)
  };
}
