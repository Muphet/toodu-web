import ApiService from "../../services/ApiService";

const teamsApi = {
  getOne(id) {
    return ApiService.get(`/teams/${id}`);
  },

  update(id, team) {
    return ApiService.put(`/teams/${id}`, team);
  },

  destroy(id) {
    return ApiService.delete(`/teams/${id}`);
  }
};

export default teamsApi;
