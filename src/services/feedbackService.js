import axios from "../axios";

let handleUpdateFeedbackService = (data) => {
  return axios.put(`/api/feedback/update-feedback`, data);
};

let handleAllFeedbackService = (productId) => {
  return axios.get(`/api/feedback/get-all-feedback?productId=${productId}`);
};

let handleDeleteFeedbackService = (id) => {
  return axios.delete(`/api/feedback/delete-feedback?id=${id}`);
};

export {
  handleUpdateFeedbackService,
  handleAllFeedbackService,
  handleDeleteFeedbackService,
};
