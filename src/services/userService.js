import axios from "../axios";

let handleLoginService = (email, password) => {
  return axios.post("/api/user/login", { email: email, password: password });
};
let handleGetAllRoleService = () => {
  return axios.get(`/api/user/get-all-role`);
};
let handleGetAllUserService = (limit, page, name) => {
  return axios.get(
    `/api/user/get-all-user?limit=${limit}&page=${page}&name=${name}`
  );
};
export { handleLoginService, handleGetAllRoleService, handleGetAllUserService };
