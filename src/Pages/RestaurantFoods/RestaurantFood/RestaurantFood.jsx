import { useEffect, useState } from "react";
import FoodItem from "../FoodItem/FoodItem";
import shop from "../../../assets/info/shopimg.svg";
import useMenu from "../../../hooks/useMenu";
import FoodData from "../FoodData/FoodData";
const RestaurantFood = () => {
  // const [foodData, setFoodData] = useState([]);
  // useEffect(() => {
  //   fetch("feckdata.json")
  //     .then((res) => res.json())
  //     .then((data) => setFoodData(data));
  // }, []);
  // console.log("category name", foodData.category);
  const [foodName, setFoodName] = useState("");
  const [menu] = useMenu();
  //  this  btn is take the food name then we can filter the food form data base
  const handleClick = (itemName) => {
    setFoodName(itemName);
  };
  console.log(foodName);

  // this is the part of the filtering
  const dessert = menu.filter((item) => item.category === foodName);
  const soup = menu.filter((item) => item.category === foodName);
  const salad = menu.filter((item) => item.category === foodName);
  const pizza = menu.filter((item) => item.category === foodName);
  const drinks = menu.filter((item) => item.category === foodName);
  console.log(soup);
  console.log(pizza);
  console.log(salad);
  return (
    <div className="bg-[#CBDBFF] grid grid-cols-2 items-center">
      <div className="m-16">
        <h2 className="text-4xl font-bold ">Popular Food</h2>
        {/*  this is foe the item cetagory */}
        <ul className="menu  bg-base-200  rounded-box mt-5 text-xl">
          <li className="hover:bg-[#170C34] hover:text-white ">
            {/* <a>Item 1</a> */}
            <button
              onClick={() => {
                handleClick("soup");
              }}
            >
              soup
            </button>
          </li>
          <li className="hover:bg-[#170C34] hover:text-white ">
            <button
              onClick={() => {
                handleClick("pizza");
              }}
            >
              pizza
            </button>
          </li>
          <li className="hover:bg-[#170C34] hover:text-white ">
            <button
              onClick={() => {
                handleClick("salad");
              }}
            >
              salad
            </button>
          </li>{" "}
        </ul>

        <div>
          <img className="" src={shop} alt="" />
        </div>
      </div>
      {/* form here pass the food data to another component pass the data as item  */}

      <div>
        <FoodData items={soup}></FoodData>
      </div>
    </div>
  );
};

export default RestaurantFood;
