import { useState } from "react";
import "../styles/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name,
        email,
        password,
      };

      await axios.post("http://192.168.2.10:4000/api/v1/user/new", newUser);

      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit" className="btn-reg" onClick={handleRegister}>
            Sign Up
          </button>
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
