import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
  };

  const handleShowPass = () => {
    setShow(!show);
  };

  return (
    <div className="main-container">
      <div className="login-container w-50 mx-auto">
        <h2>Register</h2>

        <form
          onSubmit={handleRegister}
          className="d-flex flex-column w-75 mx-auto"
        >
          <input
            className="mb-3"
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter your name"
          />

          <input
            className="mb-3"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter your email"
          />

          <input
            className="mb-3"
            type={show ? "text" : "password"}
            name="password"
            id="password"
            required
            placeholder="password"
          />
          <span onClick={handleShowPass}>show</span>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <input className="submit-btn" type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};
export default SignupForm;
