import love from "../../../assets/love.svg";
const FoodItem = ({ food }) => {
  //   const {} =FoodItem
  console.log(food);
  const { id, img, price, foodName, course, rating } = food;
  return (
    <div className="card w-3/4 bg-base-100 shadow-xl mt-24">
      <figure>
        <img
          src={img}
          alt="Shoes"
          className="w-32 h-32 rounded-full absolute "
        />
      </figure>
      <div className="">
        <div className=" flex justify-between p-5">
          <div className="card-title">
            <h1 className="text-[#2267FF] font-semibold ">
              $<span>{price}</span>
            </h1>
          </div>
          <div className="card-title">
            <img src={love} alt="" />
          </div>
        </div>
        <div className="pl-5 pr-5 mb-4">
          <h1 className="font-semibold text-xl">{foodName} </h1>
          <p className=" text-[#B7B7B7]">{course}</p>
        </div>
        <div className="flex justify-between  items-center">
          <div className="pl-4 text-lg font-medium">{rating}</div>
          <div className="text-white">
            <button className="rounded-tl-lg rounded-br-lg bg-[#2C2C2C] p-4  text-2xl ">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
