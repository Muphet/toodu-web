import ApiService from "../../services/ApiService";

const invitesApi = {
  create(invite) {
    return ApiService.post("/invites", {
      email: invite.email
    });
  }
};

export default invitesApi;
