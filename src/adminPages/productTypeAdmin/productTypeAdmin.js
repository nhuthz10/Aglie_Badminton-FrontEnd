import React, { useEffect } from "react";
import "../admin.scss";
import GridData from "../../components/gridData";

function ProductTypeAdmin() {
  const tableColumns = [
    {
      label: "STT",
      key: "",
      style: { borderTopLeftRadius: 15, paddingLeft: "2rem" },
    },
    { label: "MÃ LOẠI SẢN PHẨM", key: "productTypeId" },
    { label: "TÊN LOẠI SẢN PHẨM", key: "productTypeName" },
    { label: "", key: "", style: { borderTopRightRadius: 15 } },
  ];

  return (
    <GridData
      headerString="Quản lý loại sản phẩm"
      tableColumns={tableColumns}
      gridType={"product-type"}
    />
  );
}

export default ProductTypeAdmin;
