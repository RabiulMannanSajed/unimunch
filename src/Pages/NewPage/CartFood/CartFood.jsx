import React, { useState } from "react";

const CartFood = ({ addedFood, refetch }) => {
  const { img, foodName, _id, price } = addedFood;
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = (id) => {
    setIsChecked(!isChecked);
    //  TODO : add then info of the food and the data of the day the n
    const totalPrice = price * count;
    if (isChecked) {
      // Patch data when checkbox is checked
      patchData(id, foodName, totalPrice, count, "unchecked");
    } else {
      // Patch data when checkbox is unchecked
      patchData(id, foodName, totalPrice, count, "checked");
    }
  };
  const patchData = (id, foodName, price, count, state) => {
    // Example patch request logic, replace with your actual patch request
    console.log(`Patching data for ${foodName} ${price} ${count} as ${state}`);
    // Example patch request:
    fetch(`/api/patchData/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ id, foodName, price, count, state }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      // Handle response
    });
  };
  return (
    <div className=" mt-2 mb-4 p-5 rounded-xl backdrop-blur-sm bg-white">
      {" "}
      <div className="banner-color-patterred"></div>
      <div className="banner-color-patterBlue"></div>
      <h2>
        <div className="flex items-center font-bold">
          <input
            className="mr-3 "
            type="checkbox"
            name=""
            id=""
            onChange={() => handleCheckBoxChange(_id)}
          />
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12 mr-3">
              <img src={img} alt="" />
            </div>
          </div>
          <button onClick={decrement} className="font-bold text-2xl">
            -
          </button>
          <input
            type="text"
            value={count}
            readOnly
            className="w-10 mx-2 text-center rounded-xl"
          />
          <button onClick={increment} className="font-bold text-2xl">
            +
          </button>
          <p className="mr-3 ml-3">{foodName}</p>

          <p>{price}</p>
        </div>
      </h2>
    </div>
  );
};

export default CartFood;
