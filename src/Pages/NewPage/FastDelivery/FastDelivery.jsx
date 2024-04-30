import "./FastDelivery.css";
const FastDelivery = () => {
  return (
    <div className=" w-80 bg-[#D1EBFF] backdrop-blur-md  mt-40  ">
      <figure className="px-10 pt-10">
        <img
          src="https://i.ibb.co/WgNjqT8/Male-delivery-guy-riding-scooter.png"
          alt="Shoes"
          className="rounded-xl -mt-28 "
        />
      </figure>
      <div className=" divBorder items-center text-center ">
        <h2 className="card-title font-bold mt-4 mb-5">
          Fast Delivery and Get Free shipping You Subscribe
        </h2>
        <p className="text-xs mb-5">
          We always try to satisfy our customers by presenting super fast
          delivery and the best service from us.
        </p>
        <div className=" w-full rounded h-7 bg-white"></div>
      </div>
    </div>
  );
};

export default FastDelivery;
