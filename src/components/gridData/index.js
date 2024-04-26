import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faSquarePlus,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "./gridData.scss";
import PaginatedItems from "../../components/Pagination/Pagination";
import { path } from "../../utils";
import ModalDelete from "../../components/modalDelete";
import { useForm } from "react-hook-form";
import { LIMIT } from "../../utils";
import {
  handleChangePage,
  handleResetPagination,
} from "../../redux-toolkit/paginationSlice";
import { handleChangeSearchProductAdmin } from "../../redux-toolkit/adminSlice";
import { toast } from "react-toastify";

const currencyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

function GridData({
  gridType,
  tableColumns,
  headerString,
  handleDelete,
  getRoleString,
}) {
  const [PaginationData, setPaginationData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const rolesData = useSelector((state) => state.admin.allRole);
  const brandData = useSelector((state) => state.admin.allBrand?.data);
  const productTypeData = useSelector(
    (state) => state.admin.allProductType?.data
  );
  const sizeData = useSelector((state) => state.admin.allSize?.data);
  const productData = useSelector((state) => state.admin.allProduct?.data);
  const productSizeData = useSelector(
    (state) => state.admin.allProductSize?.data
  );
  const page = useSelector((state) => state.pagination.page);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSearchClear = () => {
    setSearchText("");
    inputRef.current.focus();
  };
  const handleClickSearch = () => {
    dispatch(handleChangePage(1));
    dispatch(handleResetPagination(true));
    dispatch(handleChangeSearchProductAdmin(searchText.trim()));
  };

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (gridType === "product-brand") {
      setPaginationData(brandData);
    } else if (gridType === "product-type") {
      setPaginationData(productTypeData);
    } else if (gridType === "product-size") {
      setPaginationData(sizeData);
    } else if (gridType === "product") {
      setPaginationData(productData);
    } else if (gridType === "productSize") {
      setPaginationData(productSizeData);
    }
  }, [
    brandData,
    gridType,
    productData,
    productSizeData,
    productTypeData,
    sizeData,
  ]);

  const handleClickSizeProduct = (item) => {
    dispatch(handleChangePage(1));
    dispatch(handleResetPagination(true));
    navigate(path.PRODUCT_PRODUCTSIZE_ADMIN, { state: item });
  };

  return (
    <div className="GridData-Global">
      <div className="GridData-Header">
        <h1
          style={{
            marginLeft: 50,
            marginBottom: 0,
            width: "100%",
            height: 20,
            fontSize: "25px",
          }}
        >
          {headerString}
        </h1>
      </div>
      <div className="GridData-Icon">
        {gridType === "product" ? (
          <div className="search-product-admin">
            <div className="search">
              <input
                ref={inputRef}
                className="searchInput"
                type="text"
                onChange={handleSearchText}
                value={searchText}
                placeholder="Tìm kiếm..."
              ></input>

              {searchText.length > 0 && (
                <button className="searchClear" onClick={handleSearchClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              )}

              <span
                style={{ border: "1px solid #ddd9d9", height: "65%" }}
              ></span>
              <div className="searchBtn" onClick={handleClickSearch}>
                <FontAwesomeIcon
                  className="searchIcon"
                  icon={faMagnifyingGlass}
                />
              </div>
            </div>
          </div>
        ) : null}

        <Link
          to={path.POST_ADMIN}
          state={{
            rolesData,
            productTypeData,
            brandData,
          }}
        >
          <FontAwesomeIcon icon={faSquarePlus} size="4x" color="#022E6C" />
        </Link>
      </div>
      <div style={{ minHeight: 550 }}>
        <table>
          <tbody>
            <tr className="Table-Header">
              {tableColumns.map((column, index) => (
                <th key={index} style={column.style}>
                  {column.label}
                </th>
              ))}
            </tr>
            {PaginationData &&
              PaginationData?.length > 0 &&
              PaginationData?.map((item, index) => (
                <tr
                  className="Table-Element"
                  key={index}
                  style={{
                    backgroundColor:
                      (index + 1) % 2 === 0 ? "#022E6C4D" : "#fff",
                  }}
                >
                  {tableColumns.map((column, columnIndex) => {
                    if (
                      columnIndex === tableColumns.length - 1 &&
                      gridType !== "report-admin"
                    )
                      return null;
                    if (gridType === "product-size") {
                      return (
                        <td key={columnIndex}>
                          {column.label === "STT"
                            ? (page - 1) * LIMIT + index + 1
                            : column.label === "TÊN LOẠI SẢN PHẨM"
                            ? item[column.key]?.productTypeName
                            : item[column.key]}
                        </td>
                      );
                    } else if (gridType === "user") {
                      return (
                        <td key={columnIndex}>
                          {column.label === "QUYỀN HẠN"
                            ? getRoleString(item?.roleData?.roleId)
                            : column.label === "TÌNH TRẠNG"
                            ? item[column.key] === 1
                              ? "Đã kích hoạt"
                              : "Chưa kích hoạt"
                            : column.label === "STT"
                            ? (page - 1) * LIMIT + index + 1
                            : item[column.key]}
                        </td>
                      );
                    } else if (gridType === "product") {
                      return (
                        <td
                          key={columnIndex}
                          style={{
                            width: column.label === "TÊN SẢN PHẨM" ? 200 : null,
                          }}
                        >
                          {column.key === "price"
                            ? currencyFormatter.format(item[column.key]) + " đ"
                            : column.key === "productTypeData"
                            ? item[column.key]?.productTypeName
                            : column.label === "STT"
                            ? (page - 1) * LIMIT + index + 1
                            : column.key === "discount"
                            ? item[column.key] === 0
                              ? item[column.key]
                              : +item[column.key] + "%"
                            : item[column.key]}
                        </td>
                      );
                    } else if (gridType === "productSize") {
                      return (
                        <td key={columnIndex}>
                          {column.key === "ProductSizeData"
                            ? item[column.key]?.name
                            : column.key === "SizeData"
                            ? item[column.key]?.sizeName
                            : column.label === "STT"
                            ? (page - 1) * LIMIT + index + 1
                            : item[column.key]}
                        </td>
                      );
                    } else {
                      return (
                        <td key={columnIndex}>
                          {column.label === "STT"
                            ? (page - 1) * LIMIT + index + 1
                            : item[column.key]}
                        </td>
                      );
                    }
                  })}
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                      }}
                    >
                      {gridType === "product" && (
                        <div
                          onClick={() => handleClickSizeProduct(item)}
                          style={{
                            width: "50px",
                            height: "40px",
                            lineHeight: "40px",
                            background: "#09ce09",
                            borderRadius: 10,
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          Size
                        </div>
                      )}
                      <Link
                        to={path.PUT_ADMIN}
                        state={{
                          data: item,
                          rolesData,
                          productTypeData,
                          brandData,
                        }}
                        style={{
                          width: "26px",
                          height: "40px",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faPencil}
                          style={{ height: "100%", width: "100%" }}
                          color="#1976d2"
                        />
                      </Link>
                      <ModalDelete handleDelete={() => handleDelete(item)} />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <PaginatedItems type={gridType} />
    </div>
  );
}

export default GridData;
