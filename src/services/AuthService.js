import qs from "qs";
import ApiService from "./ApiService";
import WebSocketService from "./WebSocketService";
import { changeAuthenticated } from "../core/auth/authActions";

class AuthService {
  constructor() {
    this.authenticated = false;
    this.store = null;
    this.auth = this.get();
  }

  init(store) {
    this.store = store;
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
    this.updateAuthenticated(false);
    localStorage.removeItem("auth");
  }

  authenticate() {
    return ApiService.get("/auth/validate_token", this.auth)
      .then(() => {
        this.updateAuthenticated(true);
        WebSocketService.connect();
      })
      .catch(err => {
        this.clear();
        return Promise.reject(err);
      });
  }

  logout() {
    this.clear();
    return ApiService.delete("/auth/sign_out");
  }

  updateAuthenticated(authenticated) {
    this.authenticated = authenticated;
    this.store.dispatch(changeAuthenticated(authenticated));
  }
}

export default new AuthService();
