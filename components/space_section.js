import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from "react";
import useWindowSize from "../hooks/windowSizeHook";
import Rellax from "rellax";
import { useEffect } from "react";

const renderText = (inputIndex) => {
  switch (inputIndex) {
    case 0:
      return "32 chỗ, 2 tầng, 100m²";
    case 1:
      return "32 chỗ, 2 tầng, 100m²";
    case 2:
      return "Gian bếp";
    case 3:
      return "Gian bếp";
    case 4:
      return "Tầng 1";
    case 5:
      return "Tầng 1";
    default:
      break;
  }
};

const SpaceSection = () => {
  const sliderRef = useRef();
  const size = useWindowSize();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onload = function () {
        var rellax = new Rellax(".rellax", {
          speed: -2,
          center: true,
        });
      };
    }
  }, []);

  const renderArrows = () => {
    return (
      <div>
        <button
          className="absolute w-[30px] z-20 opacity-75 rotate-[90deg] left-20 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img src="https://www.restaurantfrantzen.com/wp/wp-content/themes/frantzen2021/images/arrow_down.svg" />
        </button>
        <button
          className="absolute w-[30px] z-20 opacity-75 rotate-[270deg] right-20 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => sliderRef.current.slickNext()}
        >
          <img src="https://www.restaurantfrantzen.com/wp/wp-content/themes/frantzen2021/images/arrow_down.svg" />
        </button>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className={`${size.width < 768 ? "hidden" : "inline"}`}>
        {renderArrows()}
      </div>

      <div className="absolute top-[30%] w-full px-[15px] z-10 text-center text-white rellax lg:top-[40%]">
        <div className="font-bold text-[14px] tracking-[0.15em] lg:text-[16px]">
          KHÔNG GIAN
        </div>
        <div className="italic tracking-[0.15em] opacity-90 text-[18px] lg:text-[20px]">
          {renderText(activeSlide)}
        </div>
      </div>

      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={size.width < 768 ? 1 : 2}
        slidesToScroll={size.width < 768 ? 1 : 2}
        arrows={false}
        afterChange={(index) => {
          setActiveSlide(index);
        }}
        ref={sliderRef}
      >
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF_3000x2250-768x1152.jpg"
        />

        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF_3000x22502-768x1152.jpg"
        />

        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF_3000x22503-768x1152.jpg"
        />

        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF_3000x22504-768x1152.jpg"
        />

        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF_3000x22505-768x1152.jpg"
        />
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF_3000x22506-768x1152.jpg"
        />
      </Slider>
    </div>
  );
};

export default SpaceSection;
