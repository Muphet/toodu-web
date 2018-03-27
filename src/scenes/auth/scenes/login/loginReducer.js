import loginFormReducer from "./components/loginForm/loginFormReducer";

export default function loginReducer(state = {}, action) {
  return {
    loginForm: loginFormReducer(state.loginForm, action)
  };
}
