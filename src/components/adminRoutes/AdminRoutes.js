import React from "react";
import { Route, Routes } from "react-router-dom";

import ProductTypeAdmin from "../../adminPages/productTypeAdmin/productTypeAdmin";

function AdminRoutes() {
  return (
    <Routes>
      <Route path={path.PRODUCT_TYPE_ADMIN} element={<ProductTypeAdmin />} />
      <Route
        path={`${path.PRODUCT_TYPE_ADMIN}/${path.POST_ADMIN}`}
        element={<ProductTypePost />}
      />
      <Route
        path={`${path.PRODUCT_TYPE_ADMIN}/${path.PUT_ADMIN}`}
        element={<ProductTypePost />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AdminRoutes;
