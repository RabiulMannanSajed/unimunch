import info1 from "../../../assets/info/Discount Coupon.svg";
import info2 from "../../../assets/info/Fragile Package.svg";
import info3 from "../../../assets/info/Payment.svg";
import info4 from "../../../assets/info/Support.svg";
const Info = () => {
  return (
    // TODO : if user hover then change the color
    <div className="grid grid-cols-4  bg-white ">
      {/* 1st */}
      <div className=" card bg-[#E8EFFF]  m-1">
        <figure className="px-10 pt-10">
          <img src={info4} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-lg font-bold">Fast Shipping</h2>
        </div>
      </div>
      <div className="card bg-[#719DFF]  m-1">
        <figure className="px-10 pt-10">
          <img src={info2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-lg font-bold text-white">Fast Shipping</h2>
        </div>
      </div>
      <div className="card bg-[#E8EFFF]  m-1">
        <figure className="px-10 pt-10">
          <img src={info3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-lg font-bold">Fast Shipping</h2>
        </div>
      </div>
      <div className="card bg-[#E8EFFF]  m-1">
        <figure className="px-10 pt-10">
          <img src={info1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-lg font-bold">Fast Shipping</h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
