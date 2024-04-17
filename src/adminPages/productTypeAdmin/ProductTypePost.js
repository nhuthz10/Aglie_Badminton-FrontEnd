import React from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadingAdmin } from "../../redux-toolkit/adminSlice";
import { handleCreateProductTypeService } from "../../services/productService";
import { path as path_constant } from "../../utils";
import "../admin.scss";

function ProductTypePost() {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (submitData) => {
    try {
      dispatch(loadingAdmin(true));
      let res = await handleCreateProductTypeService({
        productTypeId: submitData.typeID,
        productTypeName: submitData.typeName,
      });
      if (res && res.errCode === 0) {
        toast.success("Thêm loại sản phẩm thành công");
        setValue("typeID", "");
        setValue("typeName", "");
        navigate(`/admin/${path_constant.PRODUCT_TYPE_ADMIN}`);
      }
    } catch (err) {
      if (err?.response?.data?.errCode === 2) {
        toast.error("Mã loại sản phẩm đã tồn tại");
      } else if (err?.response?.data?.errCode === 3) {
        toast.error("Tên loại sản phẩm đã tồn tại");
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      dispatch(loadingAdmin(false));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="Modal-Add">
      <h2 className="header-text">Thêm loại sản phẩm</h2>
      <div className="modal-add-input">
        <p className="label">Mã loại sản phẩm</p>
        <Controller
          control={control}
          name="typeID"
          rules={{
            required: "Nhập mã loại sản phẩm",
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              error={errors.typeID ? true : false}
              variant="filled"
              hiddenLabel
              inputProps={{ className: "text-field-text" }}
              className="text-field"
            />
          )}
        />
        {errors.typeID && (
          <p className="error-message">{errors.typeID.message}</p>
        )}
      </div>
      <div className="modal-add-input">
        <p className="label">Tên loại sản phẩm</p>
        <Controller
          control={control}
          name="typeName"
          rules={{
            required: "Nhập tên loại sản phẩm",
          }}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              error={errors.typeName ? true : false}
              variant="filled"
              hiddenLabel
              inputProps={{ className: "text-field-text" }}
              className="text-field"
            />
          )}
        />
        {errors.typeName && (
          <p className="error-message">{errors.typeName.message}</p>
        )}
      </div>

      <Button type="submit" variant="contained" className="btn">
        Thêm
      </Button>
    </form>
  );
}

export default ProductTypePost;
