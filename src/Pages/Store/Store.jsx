import store from "../../assets/store.svg";
import "./Store.css";
const Store = () => {
  return (
    <div className="flex mt-7 justify-center">
      {/* this is for img */}
      <div>
        <img className="storeImg" src={store} alt="" />
      </div>
      {/* this is for text */}
      <div className="font-bold mt-10 ml-5 w-1/4">
        <h1 className="text-7xl ">Fast Delivery And Best Service</h1>
        <p className="text-[#717171] text-xl mt-5">
          We always try to satisfy our customers by presenting super fast
          delivery and the best service from us.
        </p>
        <button className=" border-spacing-3 p-5 shadow-xl border-4 border-[#EB6EA9] shadow-[#BB0061] mt-6 rounded-full text-[#EB6EA9]">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default Store;
