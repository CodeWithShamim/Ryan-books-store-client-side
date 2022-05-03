import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "./Loading/Loading";
import { FaGooglePlus, FaFacebook } from "react-icons/fa";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  //   get user
  if (googleUser || facebookUser) {
    toast.success("Wow, login success");
    navigate(from, { replace: true });
  }
  //   get loading
  if (googleLoading || facebookLoading) {
    return <Loading></Loading>;
  }
  //   get error
  let error;
  if (googleError || facebookError) {
    error = googleError?.code || facebookError?.code;
  }

  // google & facebook login
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handleFacebookLogin = () => {
    signInWithFacebook();
  };

  return (
    <div>
      {/* set error  */}
      <p className="text-warning">{error}</p>

      <div className="d-flex align-items-center justify-content-center">
        <div className="bg-light w-100" style={{ height: "1px" }}></div>
        <p className="px-2 mt-3">or</p>
        <div className="bg-light w-100" style={{ height: "1px" }}></div>
      </div>

      {/* google & facebook login  */}
      <button
        className="bg-danger border-0 text-light mx-3 px-5 rounded"
        onClick={handleGoogleLogin}
      >
        <span className="d-flex align-items-center justify-content-center">
          <FaGooglePlus className="fs-3 p-1" />
          Google
        </span>
      </button>
      <button
        className="bg-primary border-0 text-light px-5 rounded"
        onClick={handleFacebookLogin}
      >
        <span className="d-flex align-items-center justify-content-center">
          <FaFacebook className="fs-3 p-1" />
          Facebook
        </span>{" "}
      </button>
    </div>
  );
};

export default SocialLogin;
