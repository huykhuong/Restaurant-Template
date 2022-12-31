import React from "react";
import Rellax from "rellax";
import { useEffect } from "react";

const Story = () => {
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
      <div
        className="bg-center bg-no-repeat w-full h-screen"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1635194979593-c837f944cc74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
          backgroundSize: "100% 100%",
        }}
      ></div>

      <div className="absolute top-[30%] w-full z-10 text-center text-white rellax px-[15px] lg:top-[40%]">
        <div className="font-bold text-[14px] tracking-[0.15em] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[16px]">
          STORY
        </div>
        <div className="italic text-[20px] mx-auto mt-[10px] mb-[15px] lg:text-[27px]">
          Lorem ipsum dolor sit amet
          <br></br>
          consectetur adipiscing elit, sed do eiusmod tempor
          <br></br>
          Lorem ipsum dolor sit amet, consectetur
          <br></br>
          Lorem ipsum dolor sit amet, consectetur
          <br></br>
          Lorem ipsum dolor sit amet
          <br></br>
          Lorem ipsum dolor
        </div>
      </div>
    </div>
  );
};

export default Story;
