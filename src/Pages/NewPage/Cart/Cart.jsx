import { useContext, useEffect, useState } from "react";
import useOrder from "../../../hooks/useOrder";
import { AuthContext } from "../../../Provider/AuthProvider";
import CartFood from "../CartFood/CartFood";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const data = new Date();
  const [orderFoods, refetch] = useOrder();
  const [addedFoods, setAddedFoods] = useState([]);
  useEffect(() => {
    const userLikeFood = orderFoods.filter(
      (orderFood) => orderFood?.userEmail == user?.email
    );
    setAddedFoods(userLikeFood);
    // console.log(userLikeFood);
  }, [orderFoods, user?.email]);

  return (
    <div className="bg-[#D1EBFF] p-5 rounded-xl">
      {addedFoods.map((addedFood) => (
        <CartFood
          key={addedFood._id}
          addedFood={addedFood}
          refetch={refetch}
        ></CartFood>
      ))}
    </div>
  );
};

export default Cart;
