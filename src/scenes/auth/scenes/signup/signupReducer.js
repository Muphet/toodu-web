import signupFormReducer from "./components/signupForm/signupFormReducer";

export default function signupReducer(state = {}, action) {
  return {
    signupForm: signupFormReducer(state.signupForm, action)
  };
}
