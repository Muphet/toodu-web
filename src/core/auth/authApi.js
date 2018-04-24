import ApiService from "../../services/ApiService";
import ConfigService from "../../services/ConfigService";

const authApi = {
  login(email, password) {
    return ApiService.post("/auth/sign_in", { email, password });
  },

  signup(signupData) {
    return ApiService.post("/auth", {
      email: signupData.email,
      password: signupData.password,
      password_confirmation: signupData.passwordConfirmation,
      first_name: signupData.firstName,
      last_name: signupData.firstName,
      team_attributes: { name: signupData.teamName }
    }).then(res => {
      res.data.message =
        "You have been sent an email with instructions for completing your registration";
      return res;
    });
  },

  sendResetEmail(email) {
    return ApiService.post("/auth/password", {
      email,
      redirect_url: ConfigService.get("host") + "/auth/reset-password"
    });
  },

  resetPassword(resetData) {
    return ApiService.put("/auth/password", {
      password: resetData.password,
      password_confirmation: resetData.passwordConfirmation
    });
  }
};

export default authApi;
