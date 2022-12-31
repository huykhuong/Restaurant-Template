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
      return "32 seats, 2 floors, 100m²";
    case 1:
      return "Kitchen";
    case 2:
      return "First Floor";
    default:
      break;
  }
};

const SpaceSection = () => {
  const sliderRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onload = function () {
        new Rellax(".rellax", {
          speed: -2,
          center: true,
        });
      };
    }
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-[30%] w-full px-[15px] z-10 text-center text-white rellax lg:top-[40%]">
        <div className="font-bold text-[14px] tracking-[0.15em] lg:text-[16px]">
          SPACE
        </div>
        <div className="italic tracking-[0.15em] opacity-90 text-[18px] lg:text-[20px]">
          {renderText(activeSlide)}
        </div>
      </div>

      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        afterChange={(index) => {
          setActiveSlide(index);
        }}
        ref={sliderRef}
      >
        <img
          className="min-h-[400px]"
          alt="image"
          src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />

        <img
          className="min-h-[400px]"
          alt="image"
          src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80"
        />

        <img
          className="min-h-[400px]"
          alt="image"
          src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
      </Slider>
    </div>
  );
};

export default SpaceSection;
