import { Link } from "react-router-dom";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log("this is form signUp", loggedUser);
    });
  };
  return (
    <div>
      {/* TODO : take the logo img to make the login page and make this responsibe */}
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="py-6"> DON'T STARVE. </p>
            {/* this is bubble  */}
            <div className="bg-color-pattern1"></div>
            <h1 className="text-5xl font-bold">ORDER NOW!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm bg-[#437EFF]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1>SignUp</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name")}
                  required={true}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  required={true}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  type="email"
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#ffffff]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="p-4">
              <small>
                Already have an Account{" "}
                <Link className="text-white" to="/login">
                  Login
                </Link>{" "}
              </small>
            </p>
            {/* this is bubble  */}

            <div className="bg-color-pattern"></div>
            <div className="bg-color-pattern2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
