import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
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
            <form className="card-body">
              <div className="form-control">
                <h2 className="font-bold text-3xl pb-3">Sign in</h2>
                <p className="text-[#F0F0F0]">
                  Welcome back! Please enter your details
                </p>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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
              <div className="form-control mt-6">
                <button className="btn ">Signup</button>
                <div className="flex justify-between mt-5 items-center">
                  <h2 className="text-[#4A4949]">Need an account? </h2>
                  <Link to="/login"> Login</Link>
                </div>
              </div>
            </form>
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
