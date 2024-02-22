import { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import shop from "../../../assets/info/shopimg.svg";
const RestaurantFood = () => {
  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    fetch("feckdata.json")
      .then((res) => res.json())
      .then((data) => setFoodData(data));
  }, []);
  return (
    <div className="bg-[#CBDBFF] grid grid-cols-2 items-center">
      <div className="m-16">
        <h2 className="text-4xl font-bold ">Popular Food</h2>
        {/*  this is foe the item cetagory */}
        <ul className="menu  bg-base-200  rounded-box mt-5 text-xl">
          <li className="hover:bg-[#170C34] hover:text-white">
            <a>Item 1</a>
          </li>
          <li className="hover:bg-[#170C34] hover:text-white">
            <a>Item 2</a>
          </li>
          <li className="hover:bg-[#170C34] hover:text-white">
            <a>Item 3</a>
          </li>{" "}
          <li className="hover:bg-[#170C34] hover:text-white">
            <a>Item 3</a>
          </li>{" "}
          <li className="hover:bg-[#170C34] hover:text-white">
            <a>Item 3</a>
          </li>
        </ul>
        <div>
          <img className="" src={shop} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5  ">
        {foodData.map((food) => (
          <div key={food._id}>
            <FoodItem food={food}></FoodItem>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantFood;
