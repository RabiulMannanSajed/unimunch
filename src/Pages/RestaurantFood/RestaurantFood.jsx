import { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";

const RestaurantFood = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    fetch("feckdata.json")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);
  return (
    <div>
      <FoodItem foodData={foodData}></FoodItem>
    </div>
  );
};

export default RestaurantFood;
