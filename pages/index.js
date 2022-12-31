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
        <title>Restaurant Name</title>

        <meta name="robots" content="noodp,index,follow" />
        <meta property="og:type" content="website" />
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

        <a name="space"></a>
        <SpaceSection />

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
        <a href="mailto:nhahangchayantru@gmail.com">name@gmail.com</a>
        +46 (0)8 20 85 80
      </footer>
    </div>
  );
}
