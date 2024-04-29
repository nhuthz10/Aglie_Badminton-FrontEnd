import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../components/Loading/Loading";
import "./ChangePassword.scss";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const ChangePassword = () => {
  return (
    <Loading loading={isLoading}>
      <div className="change-password-container">
        <h1 className="change-password-title">Đổi mật khẩu</h1>
        <div className="change-password-content">
          <div className="change-password-wrap-password">
            <label htmlFor="OTPInput" className="change-password-label">
              Mã OTP
            </label>
            <div className="change-password-password">
              <input
                className="change-password-input"
                id="OTPInput"
                type="text"
                placeholder="Nhập mã OTP"
                {...register("otp", {
                  required: "Nhập mã OTP của bạn",
                })}
              ></input>
            </div>
            {errors.otp && <p className="errer">{errors.otp.message}</p>}
          </div>
          <div className="change-password-wrap-password">
            <label htmlFor="passwordInput" className="change-password-label">
              Mật khẩu
            </label>
            <div className="change-password-password">
              <input
                className="change-password-input"
                id="passwordInput"
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu mới"
                {...register("password", {
                  required: "Nhập mật khẩu của bạn",
                  minLength: {
                    value: 8,
                    message: "Tối thiểu 8 ký tự",
                  },
                })}
              ></input>
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="change-password-icon"
                onClick={handleShowPassword}
              ></FontAwesomeIcon>
            </div>
            {errors.password && (
              <p className="errer">{errors.password.message}</p>
            )}
          </div>
          <button
            className="change-password-send"
            onClick={handleSubmit(handleSendOpt)}
          >
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </Loading>
  );
};

export default ChangePassword;
