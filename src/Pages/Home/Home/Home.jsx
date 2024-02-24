import RestaurantFood from "../../RestaurantFoods/RestaurantFood/RestaurantFood";
import Store from "../../Store/Store";
import Banner from "../Banner/Banner";
import Customer from "../Customer/Customer";
import Info from "../Info/Info";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <RestaurantFood></RestaurantFood>
      <Store></Store>
      <Customer></Customer>
    </div>
  );
};

export default Home;
