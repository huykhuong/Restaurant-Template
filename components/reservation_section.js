import React from "react";
import Rellax from "rellax";
import { useEffect } from "react";

const ReservationSection = () => {
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
          backgroundImage: `url(https://images.unsplash.com/photo-1581284974086-f0a9d7bae871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)`,
          backgroundSize: "100% 100%",
        }}
      ></div>

      <div className="absolute top-[30%] w-full z-10 text-center text-white rellax px-[15px] lg:top-[40%]">
        <div className="font-bold text-[14px] tracking-[0.15em] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[16px]">
          RESERVATION
        </div>
        <div className="italic text-[18px] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </div>
      </div>
    </div>
  );
};

export default ReservationSection;
