import ApiService from "../../services/ApiService";

const usersApi = {
  getAll() {
    return ApiService.get("/users");
  },

  getCurrent() {
    return ApiService.get("/users/current");
  },

  create(user, inviteToken) {
    return ApiService.post("/users", {
      invite_token: inviteToken,
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password: user.password,
      password_confirmation: user.passwordConfirmation
    })
  }
};

export default usersApi;
