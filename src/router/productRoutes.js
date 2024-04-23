import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetail from "../pages/ProductDetail/ProductDetail";

const ProductRoutes = () => {
  return (
    <Routes>
      <Route path=":productTypeId/:productId" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ProductRoutes;
