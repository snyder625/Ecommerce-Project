import { useState } from 'react';
import '../styles/Register.css';
import axios from 'axios'

const Register = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleRegister = async () => {
    try {
        const newUser = {
            name, email, password
        };

        await axios.post("http://localhost:3000/users", newUser);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="signup-container">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} />
          <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit" className="btn-reg" onClick={handleRegister}>Sign Up</button>
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