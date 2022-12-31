import React from "react";
import Rellax from "rellax";
import { useEffect } from "react";

const MenuSection = () => {
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
    <div className="relative mt-[15px]">
      <div className="absolute top-[30%] w-full z-10 text-center text-white rellax px-[15px] lg:top-[40%]">
        <div className="font-bold text-[14px] tracking-[0.15em] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[16px]">
          MENU
        </div>
        <div className="italic text-[18px] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </div>
        <div className="text-[12px] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[14px]">
          {/* Button acts as a link to bring visitor to view pdf menu based on your choice */}
          <button className="border m-[30px] px-[30px] py-[12px] tracking-[0.1em] rounded-md">
            <a>Details</a>
          </button>
        </div>
      </div>

      <div
        className="bg-center bg-no-repeat w-full h-screen"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1623667322051-18662ce6334c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80)`,
          backgroundSize: "100% 100%",
        }}
      ></div>
    </div>
  );
};

export default MenuSection;
