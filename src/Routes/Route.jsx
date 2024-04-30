import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Signup from "../Signup/Signup";
import Login from "../Pages/Login/Login";
import UserHomepage from "../Pages/UserHomepage/UserHomepage";
import Dashbord from "../Pages/NewPage/Dashbord/Dashbord";
import Like from "../Pages/NewPage/Like/Like";
import Cart from "../Pages/NewPage/Cart/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <UserHomepage></UserHomepage>,
    children: [
      {
        path: "/dashboard/dashboard",
        element: <Dashbord></Dashbord>,
      },
      {
        path: "/dashboard/like",
        element: <Like></Like>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
