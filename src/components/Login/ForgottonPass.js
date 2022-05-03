import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const ForgottonPass = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleResetPass = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);
    await sendPasswordResetEmail(email);
    toast.success(
      "Successfully send reset email!!! Now check your email address"
    );
  };

  let errorMessage;
  // get sending
  if (sending) {
    return <Loading></Loading>;
  }
  // get error
  if (error) {
    errorMessage = error.code;
  }

  return (
    <div className="main-container">
      <div className="login-container w-50 mx-auto">
        <h2>Reset your password</h2>
        <p className="px-3">
          Enter your account that you want to the reset your email
        </p>

        <form
          onSubmit={handleResetPass}
          className="d-flex flex-column w-75 mx-auto"
        >
          <input
            className="mb-3"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Reset email here"
          />
          <input className="submit-btn" type="submit" value="Reset" />
        </form>
        {/* show error message  */}
        <p className="text-warning">{errorMessage}</p>
      </div>
    </div>
  );
};

export default ForgottonPass;
