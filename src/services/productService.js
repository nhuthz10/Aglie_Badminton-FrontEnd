import axios from "../axios";

let handleGetProductService = (productId) => {
  return axios.get(`/api/product/get-product?productId=${productId}`);
};

let hadnleAddProductToCart = (data) => {
  return axios.post(`/api/cart/add-product-to-cart`, data);
};

let handleUpdateProductTypeService = (data) => {
  return axios.put(`/api/product-type/update-product-type`, data);
};
export {
  handleGetProductService,
  hadnleAddProductToCart,
  handleUpdateProductTypeService,
};
