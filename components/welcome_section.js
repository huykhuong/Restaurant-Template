import React from "react";

const WelcomeSection = () => {
  return (
    <div className="">
      <div
        className="bg-center bg-no-repeat w-full h-screen"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1618597017017-7ce39f28eb41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
          backgroundSize: "100% 100%",
        }}
      ></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <h1 className="text-white text-5xl text-center leading-[45px] font-akashi lg:text-[70px]">
          NAME
        </h1>
        <p className="mt-[10px] text-white text-center text-opacity-70 tracking-[15px] text-[20px] lg:text-[26px] lg:mt-[25px]">
          vegetarian house
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
