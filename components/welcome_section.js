import React from "react";

const WelcomeSection = () => {
  return (
    <div className="">
      <div
        className="bg-center bg-no-repeat w-full h-screen"
        style={{
          backgroundImage: `url(https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/5D4_0712-HDR-scaled.jpg)`,
          backgroundSize: "auto 100%",
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-white text-5xl text-center leading-[45px] font-akashi lg:text-[70px]">
          AN TRÚ
        </h1>
        <p className="mt-[10px] text-white text-center text-opacity-70 tracking-[15px] text-[20px] lg:text-[26px] lg:mt-[25px]">
          vegetarian house
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
