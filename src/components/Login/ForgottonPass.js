import React from "react";

const ForgottonPass = () => {
  const handleResetPass = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

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
      </div>
    </div>
  );
};

export default ForgottonPass;
