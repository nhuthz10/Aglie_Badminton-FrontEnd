import { Route, Routes } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProductRoutes from "./router/ProductRoutes";
import AdminRoutes from "./router/AdminRoutes";
import AdminLayout from "../src/layouts/adminLayout/AdminLayout";
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
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.PRODUCT} element={<ProductRoutes />} />
        <Route path={path.NOT_FOUND} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
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
