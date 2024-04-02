import { useContext } from "react";
import logo from "../../assets/info/logo.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";

const UserHomepage = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="m-5">
      <div className="flex justify-between">
        <div>
          <img className="w-28" src={logo} alt="" />
        </div>
        <div>user Dashboard </div>
        <div>
          <h2>{user?.email}</h2>
        </div>
      </div>

      {/* this is a vartical navBar */}
      <div className="flex">
        <div className=" bg-red-400 md:w-20 md:h-full w-full md:fixed   md:flex-col flex  text-white text-center">
          <ul className="pt-5">
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/like">Love</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" ml-28">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default UserHomepage;
