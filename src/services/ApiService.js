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
    if (state.core.meta.connected) {
      return false;
    } else {
      alert("You are offline, Toodu is in read-only mode.");
      return true;
    }
  }

  post(url, data) {
    if (this.isOffline()) return;
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
    if (this.isOffline()) return;
    return axios
      .put(url, data, { headers: AuthService.auth })
      .then(this.setAuth);
  }

  delete(url) {
    if (this.isOffline()) return;
    return axios.delete(url, { headers: AuthService.auth }).then(this.setAuth);
  }

  setAuth(res) {
    AuthService.set(res.headers);
    return res;
  }
}

export default new ApiService();
