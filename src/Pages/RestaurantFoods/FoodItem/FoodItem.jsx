import { useContext } from "react";
import love from "../../../assets/love.svg";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const FoodItem = ({ item }) => {
  const date = new Date();

  const path = useLocation();
  console.log(path.pathname);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { img, price, foodName, course, rating, _id } = item;

  const handleAddToLoveFood = (id) => {
    console.log(foodName);

    if (user && user?.email) {
      // we will send those data to our data base
      const likeFood = {
        img: img,
        price: price,
        foodName: foodName,
        course: course,
        userEmail: user?.email,
        date: date,
      };
      fetch("http://localhost:5000/likeFoods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(likeFood),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // this is use for navbar
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Place Login to order the food !",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  const handleOrderFood = (id) => {
    console.log(foodName);

    if (user && user?.email) {
      // we will send those data to our data base
      const likeFood = {
        img: img,
        price: price,
        foodName: foodName,
        course: course,
        userEmail: user?.email,
      };
      fetch("http://localhost:5000/orderFoods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(likeFood),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // this is use for navbar
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Place Login to order the food !",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-3/4 bg-base-100 shadow-xl mt-24">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="w-28 h-28 rounded-full absolute "
        />
      </figure>
      <div className="">
        <div className=" flex justify-between p-5">
          <div className="card-title">
            <h1 className="text-[#2267FF] font-semibold ">
              $<span>{price}</span>
            </h1>
          </div>
          {/* If user present then he can add this in the data base  */}
          <div className="card-title">
            {path.pathname == "/dashboard/like" ? (
              <>
                <button
                  onClick={() => handleAddToLoveFood(_id)}
                  disabled={true}
                >
                  <img src={love} alt="" />
                </button>
              </>
            ) : (
              <>
                {" "}
                <button onClick={() => handleAddToLoveFood(_id)}>
                  <img src={love} alt="" />
                </button>
              </>
            )}
          </div>{" "}
        </div>
        <div className="pl-5 pr-5 mb-4">
          <h1 className="font-semibold text-xl">{foodName} </h1>
          <p className=" text-[#B7B7B7]">{course}</p>
        </div>
        <div className="flex justify-between  items-center">
          <div className="pl-4 text-lg font-medium">{rating}</div>

          {/* If user present then he can add this in the data base  */}

          <div className="text-white">
            <button
              onClick={() => handleOrderFood(_id)}
              className="rounded-tl-lg rounded-br-lg bg-[#2C2C2C] p-2  text-2xl "
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
