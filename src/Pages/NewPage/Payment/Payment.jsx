import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useOrder from "../../../hooks/useOrder";

const Payment = () => {
  const { user } = useContext(AuthContext);
  const date = new Date();
  const [orderFoods] = useOrder();
  const [userOrderedFoods, setUserOrderedFoods] = useState([]);
  useEffect(() => {
    const userEmail = orderFoods.filter(
      (orderFood) => orderFood?.userEmail === user?.email
    );
    setUserOrderedFoods(userEmail);
  }, [orderFoods, user?.email]);

  const payBill = userOrderedFoods.reduce(
    (sum, item) => item.totalPrice + sum,
    0
  );
  const handlePayment = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.holderName.value;
    const cardNumber = form.cardNumber.value;
    const expDate = form.expDate.value;
    const location = form.location.value;
    const cvvNumber = form.cvvNumber.value;

    const userPaymentInfo = {
      userName: userName,
      cardNumber: cardNumber,
      expDate: expDate,
      location: location,
      cvvNumber: cvvNumber,
      userEmail: user?.email,
      date: date,
      payBill: payBill,
    };
    fetch("http://localhost:5000/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPaymentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("added");
        }
      });
  };
  return (
    <div className="w-2/4">
      <div className="banner-color-patterred"></div>
      <div className="banner-color-patterBlue"></div>
      <form className="card-body" onSubmit={handlePayment}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Card Holder Name*</span>
          </label>
          <input
            type="text"
            name="holderName"
            placeholder="Enter Card holder name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Card Number*</span>
          </label>
          <input
            type="number"
            name="cardNumber"
            placeholder="0000 0000 0000 00000"
            className="input input-bordered"
            required
          />
        </div>

        <div className="flex justify-between">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Expiry Date*</span>
            </label>
            <input
              type="date"
              name="expDate"
              placeholder="MM/YY"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CVV*</span>
            </label>
            <input
              type="number"
              name="cvvNumber"
              placeholder="1234"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Location </span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Give street name, house number"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6 w-1/4">
          <input
            className="btn bg-[#1542A4] font-semibold text-xl text-white"
            type="submit"
            value="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Payment;
