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
          backgroundImage: `url(https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/Frantzen_Book_7130-scaled.jpg)`,
          backgroundSize: "auto 100%",
        }}
      ></div>

      <div className="absolute top-[30%] w-full z-10 text-center text-white rellax px-[15px] lg:top-[40%]">
        <div className="font-bold text-[14px] tracking-[0.15em] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[16px]">
          CÂU CHUYỆN
        </div>
        <div className="italic text-[20px] mx-auto mt-[10px] mb-[15px] lg:text-[27px]">
          Nhà hàng chay AN TRÚ phục vụ
          <br></br>
          các món ăn chay lấy cảm hứng từ
          <br></br>
          các nước châu Á điển hình như Hàn
          <br></br>
          Quốc và Nhật Bản, hoà điệu với văn hoá
          <br></br>
          ẩm thực chay Việt Nam để tạo nên màu sắc
          <br></br>
          tươi mới, đương đại.
        </div>

        {/* <div className="italic opacity-90 text-[20px] mx-auto mt-[10px] mb-[15px] lg:text-[35px]">
          Nhà hàng chay AN TRÚ mang âm hưởng Phật Giáo Ứng Dụng vào cuộc sống
          hiện đại, nên các chiến lược và đường lối kinh doanh đều dựa trên lời
          dạy của Đức Phật và những vị Thầy đáng kính của chúng tôi
        </div> */}
        {/* <div className="text-[12px] max-w-[480px] mx-auto mt-[10px] mb-[15px] lg:text-[14px]">
          <button className="border m-[30px] px-[30px] py-[12px] tracking-[0.1em] rounded-md">
            Chi tiết
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Story;
