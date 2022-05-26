import React from "react";
import Rellax from "rellax";
import { useEffect, useRef } from "react";
import useWindowSize from "../hooks/windowSizeHook";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const GallerySection = () => {
  const sliderRef = useRef();
  const size = useWindowSize();

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

      {/* <div className="absolute top-[30%] w-full px-15 z-10 text-center text-white rellax lg:top-[40%]">
        <div className="text-[16px] tracking-[0.15em] lg:text-[18px]">
          KHÔNG GIAN
        </div>
        <div className="italic tracking-[0.15em] opacity-90 text-[19px] lg:text-[22px]">
          {renderText(activeSlide)}
        </div>
      </div> */}

      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={size.width < 768 ? 1 : 2}
        slidesToScroll={size.width < 768 ? 1 : 2}
        arrows={false}
        ref={sliderRef}
      >
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web25.jpg"
        />

        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web26.jpg"
        />

        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web17.jpg"
        />

        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web18.jpg"
        />

        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web15.jpg"
        />
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web16.jpg"
        />
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web21.jpg"
        />
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web22.jpg"
        />
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web19.jpg"
        />
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web20.jpg"
        />
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web23.jpg"
        />
        <img
          width={1500}
          height={2250}
          src="https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/RF-web24.jpg"
        />
      </Slider>
    </div>
  );
};

export default GallerySection;
