import qs from "qs";
import ApiService from "./ApiService";
import WebSocketService from "./WebSocketService";

class AuthService {
  constructor() {
    this.authenticated = false;
    this.auth = this.get();
  }

  set(auth) {
    ["access-token", "token-type", "client", "expiry", "uid"].forEach(key => {
      if (auth[key]) this.auth[key] = auth[key];
    });
    localStorage.setItem("auth", JSON.stringify(this.auth));
  }

  get() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    return auth || {};
  }

  setFromUrl() {
    const queryString = window.location.search.substr(1);
    const queryParams = qs.parse(queryString);
    this.clear();
    this.set(queryParams);
  }

  clear() {
    this.auth = {};
    this.authenticated = false;
    localStorage.removeItem("auth");
  }

  authenticate() {
    return ApiService.get("/auth/validate_token", this.auth)
      .then(() => {
        this.authenticated = true;
        WebSocketService.connect();
      })
      .catch(err => {
        this.clear();
        return Promise.reject(err);
      });
  }

  login(email, password) {
    return ApiService.post("/auth/sign_in", { email, password });
  }

  logout() {
    this.clear();
    return ApiService.delete("/auth/sign_out");
  }

  signup(signupData) {
    return ApiService.post("/auth", {
      email: signupData.email,
      password: signupData.password,
      password_confirmation: signupData.passwordConfirmation,
      first_name: signupData.firstName,
      last_name: signupData.firstName,
      team_attributes: { name: signupData.teamName },
      confirm_success_url: "http://localhost:3001/auth/verified"
    });
  }

  sendResetEmail(email) {
    return ApiService.post("/auth/password", {
      email,
      redirect_url: "http://localhost:3001/auth/reset-password"
    });
  }

  resetPassword(resetData) {
    return ApiService.put("/auth/password", {
      password: resetData.password,
      password_confirmation: resetData.passwordConfirmation
    });
  }
}

export default new AuthService();
