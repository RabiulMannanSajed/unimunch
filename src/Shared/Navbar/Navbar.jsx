import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user.email);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("SuccessFully logOut sir ");
      })
      .catch((error) => console.log(error));
  };
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/foodOrder">Food Order</Link>
      </li>
      <li>
        {" "}
        <Link to="/aboutUs">About Us</Link>
      </li>
      <li>
        <Link to="/contactus"></Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      {/* <div className="navbar-end">
        <Link to="/signup" className="btn">
          SignUp
        </Link>
      </div> */}

      {/*  if user is present then he can logOut or he can signUp/login */}
      <div className="navbar-end">
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
          </>
        ) : (
          <>
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
