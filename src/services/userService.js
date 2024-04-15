import axios from "../axios";

let handleLoginService = (email, password) => {
  return axios.post("/api/user/login", { email: email, password: password });
};

let handleCreatCart = (data) => {
  return axios.post("/api/cart/create-cart", data);
};

export { handleLoginService, handleCreatCart };
