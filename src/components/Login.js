import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Dùng để chuyển hướng

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage("Vui lòng nhập đầy đủ thông tin.");
    } else {
      onLogin(username); // Gọi hàm onLogin từ App.js khi đăng nhập thành công
      navigate("/"); // Chuyển hướng về trang chủ
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-group">
            <label>Tên người dùng hoặc Email:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên người dùng hoặc email"
            />
          </div>
          <div className="input-group">
            <label>Mật khẩu:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit" className="login-btn">
            Đăng nhập
          </button>
          <div className="other-links">
            <a href="#">Quên mật khẩu?</a>
            <a href="#">Đăng ký</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
