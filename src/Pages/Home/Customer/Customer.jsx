import customerImg from "../../../assets/info/customer.svg";
import "./Customer.css";
const Customer = () => {
  // TODO: in this customer site first portion will show the even and the other side will show the even part
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
              src="https://picsum.photos/200/300?t=3"
              alt=""
              className="pic"
            />
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
          </div>
        </div>
        <div>
          <img src={customerImg} alt="" />
        </div>
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
              src="https://picsum.photos/200/300?t=3"
              alt=""
              className="pic"
            />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
