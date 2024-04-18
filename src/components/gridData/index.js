import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const currencyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatterDate = (date) => {
  const dateObject = new Date(date);
  const formattedTime = dayjs(dateObject).format("DD/MM/YYYY");
  return formattedTime;
};

function GridData({
  gridType,
  tableColumns,
  headerString,
  handleDelete,
  getRoleString,
}) {
  const [PaginationData, setPaginationData] = useState([]);
  const productData = useSelector((state) => state.admin.allProduct?.data);
  const page = useSelector((state) => state.pagination.page);
  const navigate = useNavigate();

  const { setValue } = useForm();

  const dispatch = useDispatch();

  useEffect(() => {
    if (gridType === "product") {
      setPaginationData(productData);
    }
  }, [gridType, productData]);

  useEffect(() => {
    const firstDayOfMonth = dayjs().startOf("month").toDate();
    const lastDayOfMonth = dayjs().endOf("month").toDate();
    setValue("timeStart", dayjs(new Date(firstDayOfMonth)));
    setValue("timeEnd", dayjs(new Date(lastDayOfMonth)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <div className="GridData-Icon"></div>
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
                    } else if (gridType === "voucher") {
                      return (
                        <td key={columnIndex}>
                          {column.key === "timeStart"
                            ? dayjs(+item[column.key]).format("DD/MM/YYYY")
                            : column.key === "timeEnd"
                            ? dayjs(+item[column.key]).format("DD/MM/YYYY")
                            : column.key === "voucherPrice"
                            ? currencyFormatter.format(item[column.key]) + " đ"
                            : column.label === "STT"
                            ? (page - 1) * LIMIT + index + 1
                            : item[column.key]}
                        </td>
                      );
                    } else if (gridType === "order-admin") {
                      return (
                        <td key={columnIndex}>
                          {column.key === "createdAt"
                            ? formatterDate(item[column.key])
                            : column.key === "totalPrice"
                            ? currencyFormatter.format(item[column.key]) + " đ"
                            : column.label === "STT"
                            ? (page - 1) * LIMIT + index + 1
                            : item[column.key]}
                        </td>
                      );
                    } else if (gridType === "report-admin") {
                      return (
                        <td key={columnIndex}>
                          {column.key === "time"
                            ? formatterDate(item[column.key])
                            : column.key === "price"
                            ? currencyFormatter.format(item[column.key]) + " đ"
                            : column.key === "discount"
                            ? currencyFormatter.format(
                                (item["price"] * item[column.key]) / 100
                              ) + " đ"
                            : column.key === "totalPrice"
                            ? currencyFormatter.format(item[column.key]) + " đ"
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
                  {gridType === "order-admin" ? (
                    <td>
                      <Link to={item.orderId} className="more">
                        Xem chi tiết
                      </Link>
                    </td>
                  ) : gridType === "report-admin" ? null : (
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
                          }}
                          style={{
                            width: "26px",
                            height: "40px",
                          }}
                        ></Link>
                        <ModalDelete handleDelete={() => handleDelete(item)} />
                      </div>
                    </td>
                  )}
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
