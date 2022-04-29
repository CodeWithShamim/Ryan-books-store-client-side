import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
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
            placeholder="email here"
          />
          <input
            className="mb-3"
            type="password"
            name="password"
            id="password"
            placeholder="password here"
          />
          <p className="">
            Don't have an account?{" "}
            <Link className="text-primary" to="/signup">
              sign up
            </Link>
          </p>
          <input type="submit" value="Login" />
          <p>
            <Link className="text-primary" to="/signup">
              Forgot your password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
