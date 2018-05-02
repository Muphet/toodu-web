import ApiService from "../../services/ApiService";
import ConfigService from "../../services/ConfigService";

const authApi = {
  login(email, password) {
    return ApiService.post("/auth/sign_in", { email, password });
  },

  signup(signupData) {
    const { teamName, ...data } = signupData;
    return ApiService.post("/auth", {
      ...data,
      teamAttributes: { name: teamName }
    }).then(res => {
      res.data.message =
        "You have been sent an email with instructions for completing your registration";
      return res;
    });
  },

  sendResetEmail(email) {
    return ApiService.post("/auth/password", {
      email,
      redirectUrl: ConfigService.get("host") + "/auth/reset-password"
    });
  },

  resetPassword(resetData) {
    return ApiService.put("/auth/password", resetData);
  }
};

export default authApi;
