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

let handleGetAllProductCart = (cartId) => {
  return axios.get(`/api/cart/get-all-product-cart?cartId=${cartId}`);
};

let handleUpdateProductCartService = (data) => {
  return axios.put("/api/cart/update-product-cart", data);
};

let handleDeleteProductCartService = (cartId, productId, sizeId) => {
  return axios.delete(
    `/api/cart/delete-product-cart?cartId=${cartId}&productId=${productId}&sizeId=${sizeId}`
  );
};

let handleGetPaypalClientId = () => {
  return axios.get("/api/product/get-paypal-id");
};

let handleCreateNewOrderService = (data) => {
  return axios.post("/api/order/create-order", data);
};

let handlePaymentByVnPayService = (data) => {
  return axios.post(`/api/order/create_payment_url`, data);
};

let handleDeleteProductService = (id) => {
  return axios.delete(`/api/product/delete-product?id=${id}`);
};
export {
  handlePaymentByVnPayService,
  hadnleAddProductToCart,
  handleGetAllProductCart,
  handleUpdateProductCartService,
  handleDeleteProductCartService,
  handleGetPaypalClientId,
  handleCreateNewOrderService,
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
