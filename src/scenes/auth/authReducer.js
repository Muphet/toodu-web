import loginReducer from "./scenes/login/loginReducer";
import signupReducer from "./scenes/signup/signupReducer";
import forgotPasswordReducer
  from "./scenes/forgotPassword/forgotPasswordReducer";
import resetPasswordReducer from "./scenes/resetPassword/resetPasswordReducer";

export default function dashboardReducer(state = {}, action) {
  return {
    login: loginReducer(state.login, action),
    signup: signupReducer(state.signup, action),
    forgotPassword: forgotPasswordReducer(state.forgotPassword, action),
    resetPassword: resetPasswordReducer(state.resetPassword, action)
  };
}
