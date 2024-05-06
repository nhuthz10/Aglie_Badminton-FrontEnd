import { Route, Routes } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserLayout from "./layout/userLayout/UserLayout";
import Home from "./pages/Home/Home";
import ProductRoutes from "../src/routes/productRoutes/ProductRoutes";
import UserRoutes from "../src/routes/userRoutes/UserRoutes";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error from "./pages/error/Error";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import AdminLayout from "./layout/adminLayout/AdminLayout";
import AdminRoutes from "../src/routes/adminRoutes/AdminRoutes";
import ChangePassword from "./pages/changePassword/ChangePassword";
import { path } from "./utils";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path={path.ADMIN}
          element={
            <AdminLayout>
              <AdminRoutes />
            </AdminLayout>
          }
        />
        <Route
          path={path.HOME}
          element={
            <UserLayout>
              <Home />
            </UserLayout>
          }
        />
        <Route
          path={path.PRODUCT}
          element={
            <UserLayout>
              <ProductRoutes />
            </UserLayout>
          }
        />
        <Route path={path.USER} element={<UserRoutes />} />
        <Route path={path.REGISTER} element={<Register />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={path.CHANGE_PASSWORD} element={<ChangePassword />} />
        <Route path={path.NOT_FOUND} element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontSize: "1.8rem" }}
      />
    </div>
  );
}

export default App;
