import { useContext, useEffect, useState } from "react";
import useLike from "../../../hooks/useLike";
import { AuthContext } from "../../../Provider/AuthProvider";
import FoodItem from "../../RestaurantFoods/FoodItem/FoodItem";
import BurgerVariant from "../BurgerVariant/BurgerVariant";
import FastDelivery from "../FastDelivery/FastDelivery";

const Like = () => {
  const { user } = useContext(AuthContext);
  const [likeFoods] = useLike();
  const [userLikeFoods, setUserLikeFoods] = useState([]);
  useEffect(() => {
    const userLikeFood = likeFoods.filter(
      (likeFood) => likeFood?.userEmail == user?.email
    );
    setUserLikeFoods(userLikeFood);
  }, [likeFoods, user?.email]);

  return (
    <div>
      <div className="banner-color-patterred"></div>
      <div className="banner-color-patterBlue"></div>
      <div className="flex ">
        <div
          className="grid md:grid-cols-3 gap-5 w-full bg-[#D1EBFF] rounded-2xl mr-24
       pl-5 pb-5"
        >
          {userLikeFoods.map((item) => (
            <FoodItem key={item._id} item={item}></FoodItem>
          ))}
        </div>
        <div>
          <BurgerVariant></BurgerVariant>
          <FastDelivery></FastDelivery>
        </div>
      </div>
    </div>
  );
};

export default Like;
