import { useState } from "react";
import "../styles/Login.css";
import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(
        "http://192.168.2.10:4000/api/v1/user/login",
        {
          email,
          password,
        }
      );
      dispatch(loginSuccess(res.data));
      console.log(res.data);
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn" onClick={handleLogin}>
            Sign In
          </button>
          <p className="forgot-password">Forgot Password?</p>
        </form>
        <div className="register-link">
          <p>Dont have an account?</p>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
