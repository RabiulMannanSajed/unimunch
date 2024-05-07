import { useContext, useEffect, useState } from "react";
import logo from "../../assets/info/logo.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import useUser from "../../hooks/useUser";

const UserHomepage = () => {
  const { users } = useUser();
  const { user, logOut } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState([]);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("SuccessFully logOut sir ");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    // const matchEmail = users.find((userE) => userE?.email == user?.email);
    // setUserEmail(matchEmail);
    // console.log(matchEmail);
  }, [user?.email, users]);
  return (
    <div className=" ">
      {/*  this is  navbar  */}
      <div className="navbar justify-between  fixed z-10 bg-opacity-30 bg-slate-100 ">
        <div className="flex ">
          <img className="w-28" src={logo} alt="" />
        </div>
        <div className="form-control">
          <div className="text-xl font-bold">User Dashboard </div>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      {/* this is a vartical navBar */}
      <div className="flex ">
        <div className="mt-28 bg-[#1542A4] md:w-20 md:h-3/4 md:fixed rounded-lg   md:flex-col flex  text-white text-center ">
          <div>
            <ul className="pt-5 text-center">
              {}
              <li>
                <Link to="/dashboard/dashboard">
                  <TiHome className="text-3xl mb-5 ml-5 " />
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/dashboard/like">
                  <FaHeart className="text-3xl mb-5 ml-5" />
                </Link>
              </li>
              <li>
                <Link to="/dashboard/cart">
                  <FaShoppingCart className="text-3xl mb-5 ml-5" />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className=" mt-60">
              <li>
                {user ? (
                  <>
                    <button onClick={handleLogOut} className="btn btn-ghost ">
                      <IoIosLogOut className="text-3xl" />
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" ml-28 mt-28">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserHomepage;
