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
    <div className="relative mt-[20px]">
      <div className="absolute top-[30%] w-full px-15 z-10 text-center text-white rellax px-[15px] lg:top-[40%]">
        <div className="text-[16px] tracking-[0.15em] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[18px]">
          THỰC ĐƠN
        </div>
        <div className="italic text-[19px] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[20px]">
          Chúng tôi có menu rất là chất lượng, xem đi nha hi hi hi
        </div>
        <div className="text-[12px] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[14px]">
          <button className="border m-[30px] px-[30px] py-[15px] tracking-[0.1em] rounded-md">
            Chi tiết
          </button>
        </div>
      </div>

      <div
        className="bg-center bg-no-repeat w-full h-screen"
        style={{
          backgroundImage: `url(https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/Ftrantzen_Book_9759-scaled.jpg)`,
          backgroundSize: "auto 100%",
        }}
      ></div>
    </div>
  );
};

export default MenuSection;
