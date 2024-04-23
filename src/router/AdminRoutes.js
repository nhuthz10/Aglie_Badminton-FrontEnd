import React from "react";
import { Route, Routes } from "react-router-dom";

import Error from "../../pages/error/Error";
import { path } from "../../utils";
import ProductAdmin from "../../adminPages/productAdmin/productAdmin";
import ProductPost from "../../adminPages/productAdmin/ProductPost";
import ProductSizeAdmin from "../../adminPages/productAdmin/productSizeAdmin";
import ProductSizePost from "../../adminPages/productAdmin/ProductSizePost";

function AdminRoutes() {
  return (
    <Routes>
      <Route path={path.PRODUCT_ADMIN} element={<ProductAdmin />} />
      <Route
        path={`${path.PRODUCT_ADMIN}/${path.POST_ADMIN}`}
        element={<ProductPost />}
      />
      <Route
        path={`${path.PRODUCT_ADMIN}/${path.PUT_ADMIN}`}
        element={<ProductPost />}
      />
      <Route
        path={`${path.PRODUCT_ADMIN}/${path.PRODUCT_PRODUCTSIZE_ADMIN}`}
        element={<ProductSizeAdmin />}
      />
      <Route
        path={`${path.PRODUCT_ADMIN}/${path.PRODUCT_PRODUCTSIZE_ADMIN}/${path.POST_ADMIN}`}
        element={<ProductSizePost />}
      />
      <Route
        path={`${path.PRODUCT_ADMIN}/${path.PRODUCT_PRODUCTSIZE_ADMIN}/${path.PUT_ADMIN}`}
        element={<ProductSizePost />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AdminRoutes;
