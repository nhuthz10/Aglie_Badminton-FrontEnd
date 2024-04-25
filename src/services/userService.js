import axios from "../axios";

let handleLoginService = (email, password) => {
  return axios.post("/api/user/login", { email: email, password: password });
};
export { handleLoginService, handleGetAllRoleService, handleGetAllUserService };
