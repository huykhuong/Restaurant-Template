import React from "react";
import Rellax from "rellax";
import { useEffect } from "react";

const Message = () => {
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
          backgroundImage: `url(https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/5D4_1840-001-scaled.jpg)`,
          backgroundSize: "auto 100%",
        }}
      ></div>

      <div className="absolute top-[35%] w-full z-10 text-center text-white rellax px-[15px] lg:top-[45%]">
        <div className="font-bold italic text-[14px] tracking-[0.15em] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[16px]">
          <q>Mỗi ngày một bữa ăn chay để yêu thương cơ thể và Trái Đất</q>
        </div>
      </div>
    </div>
  );
};

export default Message;
