import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main-container">
      <div className="login-container w-50 mx-auto">
        <h2>Register</h2>

        <form
          onSubmit={handleRegister}
          className="d-flex flex-column w-75 mx-auto"
        >
          <label className="text-start" htmlFor="name">
            Name
          </label>
          <input className="mb-3" type="text" name="name" id="name" />

          <label className="text-start" htmlFor="email">
            Email
          </label>
          <input className="mb-3" type="email" name="email" id="email" />

          <label className="text-start" htmlFor="password">
            Password
          </label>
          <input
            className="mb-3"
            type="password"
            name="password"
            id="password"
          />
          <p className="">
            Already have an account?{" "}
            <Link className="text-primary" to="/login">
              login
            </Link>
          </p>
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};
export default SignupForm;
