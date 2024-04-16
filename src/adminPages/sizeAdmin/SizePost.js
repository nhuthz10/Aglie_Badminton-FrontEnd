import React, { useEffect } from "react";
import { Button, TextField, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";

import "../admin.scss";

function SizePost() {
  const {
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const { state, pathname } = useLocation();
  const { data, productTypeData } = state || {};
  const path = pathname.split("/");
  useEffect(() => {
    if (data) {
      setValue("sizeID", data.sizeId);
      setValue("sizeName", data.sizeName);
      setValue("productType", data.productTypeSizeData?.productTypeId);
    }
  }, [data, setValue]);

  return (
    <form className="Modal-Add">
      <h2 className="header-text">
        {path[3] === "create" ? "Thêm size" : "Sửa size"}
      </h2>
      <div className="modal-add-input">
        <p className="label">Loại sản phẩm</p>
        <Controller
          control={control}
          name="productType"
          rules={{
            required: "Chọn mã size",
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              error={errors.productType ? true : false}
              select
              variant="filled"
              hiddenLabel
              inputProps={{ className: "text-field-text" }}
              SelectProps={{
                IconComponent: () => (
                  <ArrowDropDownIcon
                    style={{
                      fontSize: "3.5rem",
                    }}
                  />
                ),
              }}
              className="text-field"
            >
              {productTypeData &&
                productTypeData.length > 0 &&
                productTypeData.map((option) => (
                  <MenuItem
                    key={option.productTypeId}
                    value={option.productTypeId}
                    style={{
                      fontSize: "var(--text-fontSize)",
                    }}
                  >
                    {option.productTypeName}
                  </MenuItem>
                ))}
            </TextField>
          )}
        />
        {errors.productType && (
          <p className="error-message">{errors.productType.message}</p>
        )}
      </div>
      <div className="modal-add-input">
        <p className="label">Mã size</p>
        <Controller
          control={control}
          name="sizeID"
          rules={{
            required: "Nhập mã size",
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              error={errors.sizeID ? true : false}
              variant="filled"
              hiddenLabel
              inputProps={{ className: "text-field-text" }}
              className="text-field"
            />
          )}
        />
        {errors.sizeID && (
          <p className="error-message">{errors.sizeID.message}</p>
        )}
      </div>
      <div className="modal-add-input">
        <p className="label">Tên size</p>
        <Controller
          control={control}
          name="sizeName"
          rules={{
            required: "Nhập tên size",
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              error={errors.sizeName ? true : false}
              variant="filled"
              onChange={(e) => {
                field.onChange(e);
              }}
              hiddenLabel
              inputProps={{ className: "text-field-text" }}
              className="text-field"
            />
          )}
        />
        {errors.sizeName && (
          <p className="error-message">{errors.sizeName.message}</p>
        )}
      </div>

      <Button type="submit" variant="contained" className="btn">
        {path[3] === "create" ? "Thêm" : "Cập nhật"}
      </Button>
    </form>
  );
}

export default SizePost;
