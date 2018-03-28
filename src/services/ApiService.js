import axios from "axios";
import AuthService from "./AuthService";

class ApiService {
  constructor() {
    axios.defaults.baseURL = "http://localhost:3000";
  }

  post(url, data) {
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
    return axios
      .put(url, data, { headers: AuthService.auth })
      .then(this.setAuth);
  }

  delete(url) {
    return axios.delete(url, { headers: AuthService.auth }).then(this.setAuth);
  }

  setAuth(res) {
    AuthService.set(res.headers);
    return res;
  }
}

export default new ApiService();
