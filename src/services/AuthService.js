import ApiService from "./ApiService";

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

  clear() {
    this.auth = {};
    this.authenticated = false;
    localStorage.removeItem("auth");
  }

  authenticate() {
    return ApiService.get("/auth/validate_token", this.auth)
      .then(() => this.authenticated = true)
      .catch(err => {
        this.clear();
        return Promise.reject(err);
      });
  }
}

export default new AuthService();
