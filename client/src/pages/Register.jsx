// import React from 'react';
import '../styles/Register.css';

const Register = () => {
  return (
    <div className="container">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit" className="btn-reg">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account?</p>
          <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;