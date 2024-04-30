const BurgerVariant = () => {
  return (
    <div>
      <div className="card w-80 bg-[#D1EBFF]  rounded-2xl">
        <button className="text-end">love</button>
        <figure>
          <img
            src="https://i.ibb.co/sHdqnMB/2301-w018-n002-1635-A-p30-1.png"
            alt="Burger"
          />
        </figure>
        <div className="card-body ">
          <div className="flex justify-between">
            <div>
              <h1 className="font-bold">Burger+Extra chess</h1>
              <p>Main course. (1 bowl)</p>
              <p className="font-bold">4.9</p>
            </div>
            <div className="font-semibold">$27.00</div>
          </div>
          <p className="font-semibold">
            We always try to satisfy our customers by presenting super fast
            delivery and the best service from us.
          </p>
          <div className="">
            <button className=" bg-[#FF7D00] p-2 w-52 rounded-tl-lg rounded-br-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerVariant;
