import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { createUser, UpdateUserProfile } = useContext(AuthContext);
  const [userType, setUserType] = useState("normal");

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      UpdateUserProfile(data.name, data.photoUrl)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            userType: userType,
          };

          // this is taking the data of user and post the info to the database
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                navigate("/dashboard/dashboard");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
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
              <div className="form-control mt-4">
                {" "}
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="delivery"
                    checked={userType === "delivery"}
                    onChange={handleUserTypeChange}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-white">Delivery Boy</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="normal"
                    checked={userType === "normal"}
                    onChange={handleUserTypeChange}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-white">Normal User</span>
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
