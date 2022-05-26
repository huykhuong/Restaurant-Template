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
          backgroundImage: `url(https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/5D4_1918-001-scaled.jpg)`,
          backgroundSize: "auto 100%",
        }}
      ></div>

      <div className="absolute top-[30%] w-full z-10 text-center text-white rellax px-[15px] lg:top-[40%]">
        <div className="font-bold text-[14px] tracking-[0.15em] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[16px]">
          ĐẶT BÀN
        </div>
        <div className="italic text-[18px] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[20px]">
          Nếu quý khách đi theo nhóm từ 5 đến 12 người, hoan hỉ liên hệ đặt bàn
          (qua điện thoại, Facebook, Instagram, Zalo) để chúng tôi phục vụ quý
          khách tốt hơn. Trân trọng cảm ơn quý khách
        </div>
        {/* <div className="text-[12px] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[14px]">
          <button className="border m-[30px] px-[30px] py-[12px] tracking-[0.1em] rounded-md">
            Chi tiết
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ReservationSection;
