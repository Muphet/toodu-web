import ApiService from "../../services/ApiService";

const commentsApi = {
  getForTask(taskId) {
    return ApiService.get(`/tasks/${taskId}/comments`);
  },

  create(comment) {
    return ApiService.post(`/tasks/${comment.taskId}/comments`, {
      content: comment.content
    });
  }
};

export default commentsApi;
