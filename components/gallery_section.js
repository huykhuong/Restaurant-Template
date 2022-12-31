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

  return (
    <div className="relative">
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
          src="https://images.unsplash.com/photo-1609167830240-fc81e9cfd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />

        <img
          width={1500}
          height={2250}
          src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />

        <img
          width={1500}
          height={2250}
          src="https://images.unsplash.com/photo-1485962093642-5f4386e84429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />

        <img
          width={1500}
          height={2250}
          src="https://images.unsplash.com/photo-1559528896-c5310744cce8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        />
        {/* Add more images to gallery here, make sure to add 2 images at a time to make a slide have 2 images */}
      </Slider>
    </div>
  );
};

export default GallerySection;
