import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useOrder from "../../../hooks/useOrder";
import { Link } from "react-router-dom";

const TotalOrderd = () => {
  const { user } = useContext(AuthContext);
  const [orderFoods] = useOrder();
  const [userOrderedFoods, setUserOrderedFoods] = useState([]);
  useEffect(() => {
    const userEmail = orderFoods.filter(
      (orderFood) => orderFood?.userEmail === user?.email
    );
    setUserOrderedFoods(userEmail);
  }, [orderFoods, user?.email]);

  const total = userOrderedFoods.reduce(
    (sum, item) => item.totalPrice + sum,
    0
  );
  return (
    <div className="bg-[#ffffff]  rounded-xl p-5 ">
      <p className="font-bold  p-5 ">Your Selected Food</p>
      {/* TODO : make the user total bill and the drop buy page  */}
      {userOrderedFoods.map((userOrderedFood) => (
        <div key={userOrderedFood._id}>
          <div className="overflow-x-auto bg-[#F1F1F1] ">
            <table className="table table-zebra ">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="text-[#545454]">{userOrderedFood.foodName}</td>
                  <td>${userOrderedFood.totalPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div className="flex justify-between mt-5 mb-4">
        <h1>Total </h1>
        <p>${total}</p>
      </div>
      <Link to="/dashboard/payment">
        <button className="btn btn-primary w-full">Proceed to checkout</button>
      </Link>
    </div>
  );
};

export default TotalOrderd;
