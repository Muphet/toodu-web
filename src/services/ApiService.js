import ConfigService from "../services/ConfigService";
import axios from "axios";
import AuthService from "./AuthService";

class ApiService {
  constructor() {
    axios.defaults.baseURL = ConfigService.get("api_base_url");
    this.store = null;
  }

  init(store) {
    this.store = store;
  }

  isOffline() {
    const state = this.store.getState();
    if (state.core.meta.online) {
      return false;
    } else {
      alert("You are offline, Toodu is in read-only mode.");
      return Promise.reject({ message: "Network Error" });
    }
  }

  post(url, data) {
    const offlineErr = this.isOffline();
    if (offlineErr) return offlineErr;
    return axios
      .post(url, data, { headers: AuthService.auth })
      .then(this.setAuth);
  }

  get(url, params) {
    return axios
      .get(url, { params, headers: AuthService.auth })
      .then(this.setAuth);
  }

  put(url, data) {
    const offlineErr = this.isOffline();
    if (offlineErr) return offlineErr;
    return axios
      .put(url, data, { headers: AuthService.auth })
      .then(this.setAuth);
  }

  delete(url) {
    const offlineErr = this.isOffline();
    if (offlineErr) return offlineErr;
    return axios.delete(url, { headers: AuthService.auth }).then(this.setAuth);
  }

  setAuth(res) {
    AuthService.set(res.headers);
    return res;
  }
}

export default new ApiService();
