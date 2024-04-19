import axios from "../axios";

let handleGetAllProductTypeService = (limit, page, name, pagination) => {
  return axios.get(
    `/api/product-type/get-all-product-type?limit=${limit}&page=${page}&name=${name}&pagination=${pagination}`
  );
};
let handleCreateProductTypeService = (data) => {
  return axios.post(`/api/product-type/create-product-type`, data);
};

let handleUpdateProductTypeService = (data) => {
  return axios.put(`/api/product-type/update-product-type`, data);
};

let handleDeleteProductTypeService = (id) => {
  return axios.delete(`/api/product-type/delete-product-type?id=${id}`);
};


export {
  handleGetAllProductTypeService,
  handleCreateProductTypeService,
  handleUpdateProductTypeService,
  handleDeleteProductTypeService,
  
};
