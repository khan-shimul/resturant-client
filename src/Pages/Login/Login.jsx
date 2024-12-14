import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  // login handler
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password).then((result) => {
      const user = result.user;
      console.log("login success", user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 2500,
      });
      navigate(location.state ? location.state.from.pathname : "/");
    });
  };

  const handleCaptchaValidate = (e) => {
    const captchaValue = e.target.value;
    if (captchaValue.length < 6) return;
    if (validateCaptcha(captchaValue)) {
      console.log("captcha matched");
      setDisabled(false);
    } else {
      alert("Captcha does not match");
      setDisabled(true);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col md:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onChange={handleCaptchaValidate}
                type="text"
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered mb-2"
              />
            </div>

            <div className="form-control mt-6">
              {/* Todo: Apply disabled for captcha after complete project */}
              <button disabled={false} className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p>
            <small>
              New here? <Link to="/signup">Create Account</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
