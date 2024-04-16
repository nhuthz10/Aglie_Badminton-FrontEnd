import React from "react";
import GridData from "../../components/gridData";

function SizeAdmin() {
  const tableColumns = [
    {
      label: "STT",
      key: "",
      style: { borderTopLeftRadius: 15, paddingLeft: "2rem" },
    },
    { label: "MÃ SIZE", key: "sizeId" },
    { label: "TÊN SIZE", key: "sizeName" },
    { label: "TÊN LOẠI SẢN PHẨM", key: "productTypeSizeData" },
    { label: "", key: "", style: { borderTopRightRadius: 15 } },
  ];

  return (
    <GridData
      headerString="Quản lý size"
      tableColumns={tableColumns}
      gridType="product-size"
    />
  );
}

export default SizeAdmin;
