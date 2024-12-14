import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log("Created user", loggedUser);
      updateUserProfile(data.name, data.photo).then(() => {
        console.log("profile updated");
        reset();
        navigate("/");
      });
    });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col md:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full shadow-2xl">
          <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <small className="text-red-500 mt-1">
                  Name field is required
                </small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <small className="text-red-500 mt-1">
                  Photo field is required
                </small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <small className="text-red-500 mt-1">
                  Email field is required
                </small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  //   pattern:
                  //     /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <small className="text-red-500 mt-1">
                  Password field is required
                </small>
              )}
              {errors.password?.type === "minLength" && (
                <small className="text-red-500">
                  Password should be at least 6 characters
                </small>
              )}

              {/* {errors.password?.type === "pattern" && (
                <small className="text-red-500">
                  Password should be at least one uppercase one number and one
                  special character
                </small>
              )} */}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
