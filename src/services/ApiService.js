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
      return Promise.reject({ message: "Network Error" });
    }
  }

  post(url, data) {
    const offlineErr = this.isOffline();
    if (offlineErr) return offlineErr;
    return axios
      .post(url, data, { headers: AuthService.auth })
      .then(this.setAuth)
      .catch(this.handleError.bind(this));
  }

  get(url, params) {
    return axios
      .get(url, { params, headers: AuthService.auth })
      .then(this.setAuth)
      .catch(this.handleError.bind(this));
  }

  put(url, data) {
    const offlineErr = this.isOffline();
    if (offlineErr) return offlineErr;
    return axios
      .put(url, data, { headers: AuthService.auth })
      .then(this.setAuth)
      .catch(this.handleError.bind(this));
  }

  delete(url) {
    const offlineErr = this.isOffline();
    if (offlineErr) return offlineErr;
    return axios
      .delete(url, { headers: AuthService.auth })
      .then(this.setAuth)
      .catch(this.handleError.bind(this));
  }

  setAuth(res) {
    AuthService.set(res.headers);
    return res;
  }

  handleError(error) {
    if (error.response.status === 401) {
      AuthService.logout();
    }
  
    throw error;
  }
}

export default new ApiService();
