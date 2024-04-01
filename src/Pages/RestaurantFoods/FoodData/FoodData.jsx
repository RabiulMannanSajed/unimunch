import React from "react";
import FoodItem from "../FoodItem/FoodItem";

const FoodData = ({ items }) => {
  return (
    <div className="grid grid-cols-2 gap-5  ">
      {items.map((item) => (
        <FoodItem key={item._id} item={item}></FoodItem>
      ))}
    </div>
  );
};

export default FoodData;
