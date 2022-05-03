import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../../Shared/SocialLogin";
import { FaEye, FaEyeSlash, FaEnvelope, FaUnlockAlt } from "react-icons/fa";
import "./LoginForm.css";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  // get user
  if (user) {
    toast("Successfully login");
    navigate(from, { replace: true });
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
          {/* set envelpe icon  */}
          <div className="field-box">
            <FaEnvelope className="field-icon" />
            <input
              className="mb-3 w-100"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email here"
            />
          </div>

          {/* set eye icon  */}
          <div className="password-box">
            <span className="eye-icon" onClick={handleShowPass}>
              {show ? <FaEye /> : <FaEyeSlash />}
            </span>
            <span className="field-icon">
              <FaUnlockAlt />
            </span>
            <input
              className="mb-3 w-100"
              type={show ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder="Password here"
            />
          </div>

          <p>
            Don't have an account? <Link to="/signup">sign up</Link>
          </p>
          <input className="submit-btn" type="submit" value="Login" />
          <p>
            <Link to="/reset-password">Forgot your password?</Link>
          </p>
        </form>
        {/* show error message  */}
        <p className="text-warning">{errorMessage}</p>
        {/* Social login  */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default LoginForm;
