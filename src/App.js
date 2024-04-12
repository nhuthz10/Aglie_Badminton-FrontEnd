import { Route, Routes } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { path } from "./utils";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.NOT_FOUND} element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
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
