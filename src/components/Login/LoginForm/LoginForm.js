import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [show, setShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleShowPass = () => {
    setShow(!show);
  };
  return (
    <div className="main-container">
      <div className="login-container w-50 mx-auto">
        <h2>Login</h2>

        <form
          onSubmit={handleLogin}
          className="d-flex flex-column w-75 mx-auto"
        >
          <input
            className="mb-3"
            type="email"
            name="email"
            id="email"
            required
            placeholder="email here"
          />
          <input
            className="mb-3"
            type={show ? "text" : "password"}
            name="password"
            id="password"
            required
            placeholder="password here"
          />
          <span onClick={handleShowPass}>show</span>

          <p>
            Don't have an account? <Link to="/signup">sign up</Link>
          </p>
          <input className="submit-btn" type="submit" value="Login" />
          <p>
            <Link to="/reset-password">Forgot your password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
