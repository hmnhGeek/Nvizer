import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cookie from "js-cookie";
import { oauthLogout } from "../../redux/actions/authActions";
import toast, { Toaster } from "react-hot-toast";
import { parseJwt } from "../../util";

const TokenExpirationChecker = (props) => {
  let { minutes } = props;
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const checkTokenExpiration = () => {
    if (token) {
      const decodedToken = parseJwt(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        cookie.set("apiError", "Token has expired, please login again!");
        dispatch(oauthLogout(token));
        toast.error("Session has expired. Please login again.");
      }
    }
  };

  useEffect(() => {
    if (minutes) {
      const intervalId = setInterval(checkTokenExpiration, minutes * 60 * 1000);
      return () => clearInterval(intervalId);
    }
  }, [token]);

  return <Toaster />;
};

export default TokenExpirationChecker;
