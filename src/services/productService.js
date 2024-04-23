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

let handleGetProductService = (productId) => {
  return axios.get(`/api/product/get-product?productId=${productId}`);
};

let hadnleAddProductToCart = (data) => {
  return axios.post(`/api/cart/add-product-to-cart`, data);
};

let handleDeleteProductService = (id) => {
  return axios.delete(`/api/product/delete-product?id=${id}`);
};

export {
  handleGetAllBrandService,
  handleCreateBrandService,
  handleUpdateBrandService,
  handleDeleteBrandService,
  handleGetAllProductTypeService,
  handleCreateProductTypeService,
  handleUpdateProductTypeService,
  handleDeleteProductTypeService,
  handleGetProductService,
  hadnleAddProductToCart,
  handleDeleteProductService,
};
