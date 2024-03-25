import { useEffect, useState } from "react";
import customerImg from "../../../assets/info/customer.svg";
import "./Customer.css";
const Customer = () => {
  //  TODO : Take the info form data base
  // TODO: in this customer site first portion will show the even and the other side will show the even part
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="bg-[#F7EDFF] ">
      <h1 className="text-center font-bold text-4xl">
        What Says Customer About Us{" "}
      </h1>
      <div className="flex">
        {/*  this is the demo code  */}
        <div>
          <div className="pic-ctn">
            <img
              src="https://picsum.photos/200/300?t=1"
              alt=""
              className="pic"
            />
            <img
              src="https://picsum.photos/200/300?t=2"
              alt=""
              className="pic"
            />
            <img
              src="https://picsum.photos/200/300?t=2"
              alt=""
              className="pic"
            />
            <img
              src="https://picsum.photos/200/300?t=2"
              alt=""
              className="pic"
            />
          </div>
        </div>
        <div>
          {reviews.map((review) => (
            <div
              key={review._id}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 animate-display"
            >
              <h2 className="animate-custom-animation delay-2000">
                {review.name}
              </h2>
            </div>
          ))}
        </div>

        <div>
          <img src={customerImg} alt="" />
        </div>
        {/*  this is the demo code  */}
        <div>
          <div className="pic-ctn">
            <img
              src="https://picsum.photos/200/300?t=4"
              alt=""
              className="pic"
            />
            <img
              src="https://picsum.photos/200/300?t=5"
              alt=""
              className="pic"
            />
            <img
              src="https://picsum.photos/200/300?t=2"
              alt=""
              className="pic"
            />
            <img
              src="https://picsum.photos/200/300?t=2"
              alt=""
              className="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
