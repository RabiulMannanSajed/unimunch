import img1 from "../../../assets/2301.w018.n002.1635A.p30 2.svg";
import img2 from "../../../assets/6024356.svg";
import img3 from "../../../assets/Mexican Taco.svg";
import img4 from "../../../assets/Pizza Slice.svg";
import imog1 from "../../../assets/Rectangle (1).svg";
import imoge2 from "../../../assets/Rectangle (2).svg";
import imoge3 from "../../../assets/Rectangle (3).svg";
import img8 from "../../../assets/Rectangle.svg";
import img9 from "../../../assets/intro-img.svg";
import "./Banner.css";
const Banner = () => {
  const backgroundImageUrl = "https://i.ibb.co/Nxxpw3F/Group-174-1.png";

  const divStyle = {
    backgroundImage: `url('${backgroundImageUrl}')`,
  };
  return (
    <>
      <div>
        <div className=" min-h-screen hero ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div>
              <div
                className="partners-intro--thumb aos-init aos-animate "
                style={divStyle}
              >
                <div className="partners-intro--partners">
                  <div className="partners-intro--partners-item -pos-1">
                    <img
                      className="lazy loaded img-size "
                      alt=""
                      src={img1}
                      data-was-processed="true"
                    />
                  </div>
                  <div className="partners-intro--partners-item -pos-2">
                    <img
                      className="lazy loaded img-size"
                      alt=""
                      src={img2}
                      data-was-processed="true"
                    />
                  </div>
                  <div className="partners-intro--partners-item -pos-3">
                    <img
                      className="lazy loaded imoge"
                      alt=""
                      src={imoge2}
                      data-was-processed="true"
                    />
                  </div>
                  <div className="partners-intro--partners-item -pos-4">
                    <img
                      className="lazy loaded img-size"
                      alt=""
                      src={img3}
                      data-was-processed="true"
                    />
                  </div>
                  <div className="partners-intro--partners-item -pos-5">
                    <img
                      className="lazy loaded imoge"
                      alt=""
                      src={imog1}
                      data-was-processed="true"
                    />
                  </div>
                  <div className="partners-intro--partners-item -pos-6">
                    <img
                      className="lazy loaded img-size"
                      alt=""
                      src={img4}
                      data-was-processed="true"
                    />
                  </div>

                  <div className="partners-intro--partners-item -pos-7">
                    <img
                      className="lazy loaded imoge"
                      alt=""
                      src={imoge3}
                      data-was-processed="true"
                    />
                  </div>
                  <div className="partners-intro--partners-item -pos-8">
                    <img alt="" src={img8} data-was-processed="true" />
                  </div>
                </div>
                {/*  this is take the img of the center  */}
                <div className="partners-intro--logo">
                  <img
                    className="lazy loaded img-size-intro"
                    alt=""
                    src={img9}
                    data-was-processed="true"
                  />
                </div>
              </div>
            </div>
            <div className="items-end ">
              {/* <div className="bg-color-pattern  -z-10 w-11"></div> */}
              <div className="-mt-80">
                <div className="bg-color-pattern  -z-10 w-11"></div>

                <h2 className=" ">Get your food delivery in 35 minutes.</h2>
                <h2 className=" font-extrabold text-7xl ">DON'T STARVE.</h2>
                <p className="font-extrabold  text-7xl  text-[#437EFF] ">
                  ORDER NOW!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-color-pattern1"></div>
          <div className="bg-color-pattern2"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
