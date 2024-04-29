import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Loading from "../../components/Loading/Loading";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
  return (
    <Loading loading={isLoading}>
      <div className="forgot-password-container">
        <h1 className="forgot-password-title">Quên mật khẩu</h1>
        <div className="forgot-password-content">
          <div style={{ height: "10rem" }}>
            <div className="forgot-password-email">
              <FontAwesomeIcon
                className="forgot-password-email-icon"
                icon={faEnvelope}
              />
              <input
                className="forgot-password-email-input"
                placeholder="Email"
                {...register("email", {
                  required: "Nhập email của bạn",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email không hợp lệ",
                  },
                })}
              ></input>
            </div>
            {errors.email && <p className="errer">{errors.email.message}</p>}
          </div>
          <button
            className="forgot-password-send"
            onClick={handleSubmit(handleSendOpt)}
          >
            Send OTP
          </button>
        </div>
      </div>
    </Loading>
  );
};

export default ForgotPassword;
