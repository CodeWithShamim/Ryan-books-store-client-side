import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SignupForm = () => {
  const [show, setShow] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  // password showing toggle
  const handleShowPass = () => {
    setShow(!show);
  };

  // handle sign up
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);
    createUserWithEmailAndPassword(email, password);
  };

  // get user
  if (user) {
    navigate("/");
  }
  // get loading
  if (loading) {
    return <Loading></Loading>;
  }

  // get error
  let errorMessage;
  if (error) {
    errorMessage = error?.code;
  }

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
        {/* show error message  */}
        <p className="text-warning">{errorMessage}</p>
        {/* Social login  */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};
export default SignupForm;
