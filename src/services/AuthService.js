import qs from "qs";
import ApiService from "./ApiService";
import WebSocketService from "./WebSocketService";
import {
  changeAuthenticated,
  updateCurrentUser
} from "../core/auth/authActions";

class AuthService {
  constructor() {
    this.authenticated = false;
    this.store = null;
    this.persistor = null;
    this.auth = this.get();
  }

  init(store, persistor) {
    this.store = store;
    this.persistor = persistor;
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
    this.store.dispatch(updateCurrentUser(null));
    localStorage.removeItem("auth");
  }

  authenticate() {
    return ApiService.get("/auth/validate_token", this.auth)
      .then(res => {
        this.store.dispatch(updateCurrentUser(res.data.data));
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
    this.persistor.purge();
    const state = this.store.getState();
    if (state.core.meta.online) {
      return ApiService.delete("/auth/sign_out");
    } else {
      return Promise.reject({ message: "Network Error" });
    }
  }

  updateAuthenticated(authenticated) {
    this.authenticated = authenticated;
    this.store.dispatch(changeAuthenticated(authenticated));
  }
}

export default new AuthService();
