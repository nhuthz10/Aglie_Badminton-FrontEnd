import axios from "../axios";

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

export {
  handlePaymentByVnPayService,
  hadnleAddProductToCart,
  handleGetAllProductCart,
  handleUpdateProductCartService,
  handleDeleteProductCartService,
  handleGetPaypalClientId,
  handleCreateNewOrderService,
};
