import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import RemoveIcon from "@mui/icons-material/Remove";
import "./ProductDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Line = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 3,
      margin: "2rem 0",
    }}
  />
);

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [checkComponent, setCheckComponent] = useState(true);
  const [sizeData, setSizeData] = useState([]);
  const [sizeSelected, setSizeSelected] = useState(null);
  const [stockQuantity, setStockQuantity] = useState(null);

  const currencyFormatter = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className="product_detail_container">
      <div className="img_inf_product">
        <div className="img_product">
          <img
            src="https://cdn.shopvnb.com/uploads/gallery/vot-cau-long-yonex-astrox-02-feel-1_1712887566.webp"
            alt="product"
          />
        </div>

        <div className="info_product">
          <h1 className="product-name">
            Vợt Cầu Lông Yonex Astrox 02 Feel Chính Hãng
          </h1>

          <div className="star_sold">
            <Rating
              style={{ fontSize: "3.875rem" }}
              name="read-only"
              value={5}
              readOnly
              precision={0.5}
              size="large"
            />
            <span style={{ fontSize: "3rem", fontWeight: 600, marginLeft: 6 }}>
              5/5
            </span>
          </div>

          <div className="price_product">
            <p
              style={{
                marginRight: 16,
              }}
            >
              1.239.000 ₫
              <span
                style={{
                  textDecoration: "underline",
                  marginLeft: 2,
                }}
              >
                đ
              </span>
            </p>
          </div>

          <Line color="var(--gray-color)" />

          <div className="size_product">
            <p>Size</p>
            <div>
              <button>S</button>
            </div>
          </div>

          <Line color="var(--gray-color)" />

          <div className="product_number">
            <div className="number">Số lượng</div>

            <div className="quantity-stock">
              <div className="quantity-btn-wrapper">
                <button className="subtract-btn">
                  <RemoveIcon className="icon" />
                </button>
                <p>{quantity}</p>
                <button className="add-btn">
                  <AddTwoToneIcon className="icon" />
                </button>
              </div>

              {stockQuantity > 0 ? (
                <p className="stock_product">{stockQuantity} sản phẩm có sẵn</p>
              ) : stockQuantity === 0 ? (
                <p className="stock_product">Sản phẩm đã hết hàng</p>
              ) : null}
            </div>
          </div>

          <Line color="var(--gray-color)" />

          <button className="cart-btn">
            <i className="fas fa-shopping-cart"></i>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
