import Head from "next/head";
import { useState } from "react";
import Contacts from "../components/Contacts";
import GallerySection from "../components/gallery_section";
import Header from "../components/header";
import MenuSection from "../components/menu_section";
import Message from "../components/Message";
import Navigation from "../components/navigation";
import ReservationSection from "../components/reservation_section";
import SpaceSection from "../components/space_section";
import Story from "../components/Story";
import WelcomeSection from "../components/welcome_section";

export default function Home() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Nhà hàng chay An Trú</title>
        <meta
          name="description"
          content="Nhà hàng chay AN TRÚ phục vụ các món ăn chay lấy cảm hứng từ các
          nước châu Á điển hình như Hàn Quốc và Nhật Bản, hoà điệu với văn
          hoá ẩm thực chay Việt Nam để tạo nên màu sắc tươi mới, đương đại."
        />
        <meta
          name="keywords"
          content="An Trú, An Tru, nhà hàng chay An Trú, nhà hàng chay tân phú, nhà hàng chay TP.HCM, nhà hàng chay, đồ ăn chay, vegetarian restaurant, antruveggie"
        />
        <meta name="robots" content="noodp,index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nhà hàng chay An Trú" />
        <meta
          property="og:description"
          content="Nhà hàng chay AN TRÚ phục vụ các món ăn chay lấy cảm hứng từ các
              nước châu Á điển hình như Hàn Quốc và Nhật Bản, hoà điệu với văn
              hoá ẩm thực chay Việt Nam để tạo nên màu sắc tươi mới, đương đại."
        />
        <meta property="og:url" content="https://antruveggie.vn" />
        <meta property="og:site_name" content="Nhà hàng chay An Trú" />
        <link rel="canonical" href="https://antruveggie.vn" />
      </Head>

      <main className="w-full h-full">
        <Header
          setOpenNavigation={setOpenNavigation}
          isIconOpen={isOpen}
          setIconOpen={setOpen}
        />
        <Navigation
          openNavigation={openNavigation}
          setOpenNavigation={setOpenNavigation}
          setIconOpen={setOpen}
        />
        <a name="welcome"></a>
        <WelcomeSection />
        <a name="story"></a>
        <Story />
        <div
          className="bg-center bg-no-repeat h-screen mt-[50px]"
          style={{
            backgroundImage: `url(https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/DSC_3225-scaled.jpg)`,
            backgroundSize: "auto 100%",
          }}
        ></div>
        <a name="space"></a>
        <SpaceSection />
        <div
          className="bg-center bg-no-repeat h-screen mt-[50px]"
          style={{
            backgroundImage: `url(https://www.restaurantfrantzen.com/wp/wp-content/uploads/2021/11/Frantzen_Book_4100-scaled.jpg)`,
            backgroundSize: "auto 100%",
          }}
        ></div>
        <a name="menu"></a>
        <MenuSection />
        <a name="photos"></a>
        <GallerySection />
        <Message />
        <a name="make-reservation"></a>
        <ReservationSection />
        <a name="contact"></a>
        <Contacts />
      </main>

      <footer className="fixed bottom-0 w-screen border-t-2 border-t-black text-white bg-[#3A563E] text-center py-[10px] z-10 text-[13px]">
        <a href="mailto:nhahangchayantru@gmail.com">
          nhahangchayantru@gmail.com
        </a>{" "}
        +46 (0)8 20 85 80
      </footer>
    </div>
  );
}

// bg-[#7b1719]
