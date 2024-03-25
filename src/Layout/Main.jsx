import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  //TODO:  in the login and the signUp there will no navBar and Footer
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
