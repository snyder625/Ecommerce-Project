// import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="btn">Sign In</button>
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
