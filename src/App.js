import { Route, Routes } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { path } from "./utils";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Layout from "./layout/Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
      <Route
          path={path.HOME}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />        <Route path={path.NOT_FOUND} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.REGISTER} element={<Register />} />
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
