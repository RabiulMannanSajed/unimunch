import { Link } from "react-router-dom";
import logo from "../../assets/info/logo.svg";
const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen  backdrop-blur-sm">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <p className="py-6"> DON'T STARVE. </p>
            <div className="bg-color-pattern1"></div>
            <h1 className="text-5xl font-bold">ORDER NOW!</h1>
            <img src={logo} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm bg-blue-300 backdrop-blur-sm">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <h2 className="font-bold text-3xl pb-3">Login</h2>
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
                <button className="btn ">Login</button>
                <div className="flex justify-between mt-5 items-center">
                  <h2 className="text-[#534e4e]">Need an account? </h2>
                  <Link to="/signup" className="btn">
                    {" "}
                    Sign Up
                  </Link>{" "}
                </div>
              </div>
            </form>
            <div className="bg-color-pattern"></div>
            <div className="bg-color-pattern2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
