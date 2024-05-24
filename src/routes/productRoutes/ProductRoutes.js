import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../../pages/product/Product";
import ProductDetail from "../../pages/productDetail/ProductDetailPage";
import Search from "../../pages/search/Search";
import Error from "../../pages/error/Error";

function ProductRoutes() {
  return (
    <Routes>
      <Route path="search" element={<Search />} />
      <Route path=":productTypeId" element={<Product />} />
      <Route path=":productTypeId/:productId" element={<ProductDetail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default ProductRoutes;
