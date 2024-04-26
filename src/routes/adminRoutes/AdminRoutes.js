import React from "react";
import { Route, Routes } from "react-router-dom";

import Error from "../../pages/error/Error";
import { path } from "../../utils";
import SizeAdmin from "../../system/sizeAdmin/sizeAdmin";
import ProductTypeAdmin from "../../system/productTypeAdmin/productTypeAdmin";
import BrandAdmin from "../../system/brandAdmin/brandAdmin";
import ProductAdmin from "../../system/productAdmin/productAdmin";
import ProductTypePost from "../../system/productTypeAdmin/ProductTypePost";
import SizePost from "../../system/sizeAdmin/SizePost";
import BrandPost from "../../system/brandAdmin/brandPost";
import ProductPost from "../../system/productAdmin/ProductPost";
import ProductSizeAdmin from "../../system/productAdmin/productSizeAdmin";
import ProductSizePost from "../../system/productAdmin/ProductSizePost";

function AdminRoutes() {
  return (
    <Routes>
      <Route path={path.PRODUCT_ADMIN} element={<ProductAdmin />} />
      <Route path={path.PRODUCT_TYPE_ADMIN} element={<ProductTypeAdmin />} />
      <Route path={path.PRODUCT_BRAND_ADMIN} element={<BrandAdmin />} />
      <Route path={path.PRODUCT_SIZE_ADMIN} element={<SizeAdmin />} />
      <Route
        path={`${path.PRODUCT_TYPE_ADMIN}/${path.POST_ADMIN}`}
        element={<ProductTypePost />}
      />
      <Route
        path={`${path.PRODUCT_TYPE_ADMIN}/${path.PUT_ADMIN}`}
        element={<ProductTypePost />}
      />
      <Route
        path={`${path.PRODUCT_SIZE_ADMIN}/${path.POST_ADMIN}`}
        element={<SizePost />}
      />
      <Route
        path={`${path.PRODUCT_SIZE_ADMIN}/${path.PUT_ADMIN}`}
        element={<SizePost />}
      />
      <Route
        path={`${path.PRODUCT_BRAND_ADMIN}/${path.POST_ADMIN}`}
        element={<BrandPost />}
      />
      <Route
        path={`${path.PRODUCT_BRAND_ADMIN}/${path.PUT_ADMIN}`}
        element={<BrandPost />}
      />
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