import { useContext } from "react";
import RestaurantFood from "../../RestaurantFoods/RestaurantFood/RestaurantFood";
import Store from "../../Store/Store";
import Banner from "../Banner/Banner";
import Customer from "../Customer/Customer";
import Info from "../Info/Info";
import { AuthContext } from "../../../Provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    //  if the user is present then off the 2nd part
    <div>
      {user ? (
        <></>
      ) : (
        <>
          <Banner></Banner>
          <Info></Info>
          <RestaurantFood></RestaurantFood>
          <Store></Store>
          <Customer></Customer>
        </>
      )}
    </div>
  );
};

export default Home;
