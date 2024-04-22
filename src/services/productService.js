import axios from "../axios";

let handleGetAllBrandService = (limit, page, name, pagination) => {
  return axios.get(
    `/api/brand/get-all-brand?limit=${limit}&page=${page}&name=${name}&pagination=${pagination}`
  );
};
let handleCreateBrandService = (data) => {
  return axios.post(`/api/brand/create-brand`, data);
};

let handleUpdateBrandService = (data) => {
  return axios.put(`/api/brand/update-brand`, data);
};

let handleDeleteBrandService = (id) => {
  return axios.delete(`/api/brand/delete-brand?id=${id}`);
};

export {
  handleGetAllBrandService,
  handleCreateBrandService,
  handleUpdateBrandService,
  handleDeleteBrandService,
};
