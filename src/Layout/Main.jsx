import { Outlet } from "react-router-dom";

const Main = () => {
  //TODO:  in the login and the signUp there will no navBar and Footer
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
