import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";
import {
  FaEye,
  FaEyeSlash,
  FaUnlockAlt,
  FaEnvelope,
  FaRegUserCircle,
} from "react-icons/fa";

const SignupForm = () => {
  const [show, setShow] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  // password showing toggle
  const handleShowPass = () => {
    setShow(!show);
  };

  // handle sign up
  const handleRegister = async (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
  };

  // get user
  if (user) {
    toast("Congratulations, sign up complete!");
    toast("Now check your email for verify");
    navigate(from, { replace: true });
  }
  // get loading
  if (loading || sending) {
    return <Loading></Loading>;
  }

  // get error
  let errorMessage;
  if (error || verifyError) {
    errorMessage = error?.code;
  }

  return (
    <div className="main-container">
      <div
        className="login-container w-50 mx-auto"
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-anchor-placement="left"
      >
        <h2>Register</h2>

        <form
          onSubmit={handleRegister}
          className="d-flex flex-column w-75 mx-auto"
        >
          {/* set user icon  */}
          <div className="field-box">
            <FaRegUserCircle className="field-icon" />
            <input
              className="mb-3 w-100"
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
            />
          </div>

          {/* set envelpe icon  */}
          <div className="field-box">
            <FaEnvelope className="field-icon" />
            <input
              className="mb-3 w-100"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>
          {/* ==========end here ========== */}

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
