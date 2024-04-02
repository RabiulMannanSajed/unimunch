import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UserHomepage from "../Pages/UserHomepage/UserHomepage";

const Main = () => {
  const location = useLocation();

  //  if location is login and signUp then the navbar will disable
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <>
          <UserHomepage></UserHomepage>
        </>
      ) : (
        <>
          {noHeaderFooter || <Navbar></Navbar>}
          <Outlet></Outlet>
        </>
      )}
    </div>
  );
};

export default Main;
