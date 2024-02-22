import RestaurantFood from "../../RestaurantFoods/RestaurantFood/RestaurantFood";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <RestaurantFood></RestaurantFood>
    </div>
  );
};

export default Home;
