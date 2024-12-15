import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user);
      const userInfo = {
        name: res.user.displayName,
        email: res.user.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate(location.state ? location.state.from.pathname : "/");
      });
    });
  };
  return (
    <div className="px-8 pb-8">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleLogin} className="btn">
          <FaGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
