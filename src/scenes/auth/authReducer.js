import { combineReducers } from "redux";
import loginReducer from "./scenes/login/loginReducer";
import signupReducer from "./scenes/signup/signupReducer";
import forgotPasswordReducer from "./scenes/forgotPassword/forgotPasswordReducer";
import resetPasswordReducer from "./scenes/resetPassword/resetPasswordReducer";

export default combineReducers({
  login: loginReducer,
  signup: signupReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer
});
