import React from "react";

const Navigation = ({ openNavigation, setOpenNavigation, setIconOpen }) => {
  const style = {
    listItem:
      "relative text-white text-[14px] leading-[14px] tracking-[2px] min-h-[55px] uppercase text-center font-medium",
    listLink: "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 m-0",
  };

  return (
    <div>
      {/* Overlay div */}
      <div
        className={`${
          openNavigation
            ? "visible bg-black bg-opacity-60"
            : "invisible bg-black bg-opacity-0"
        } w-screen h-screen fixed top-0 left-0 z-40 transition-all duration-[0.65s] ease-[0.85, 0.01, 0.4, 1] cursor-pointer`}
        onClick={() => {
          setOpenNavigation(false), setIconOpen(false);
        }}
      ></div>

      {/* Navigation div */}
      <div
        className={`${
          openNavigation ? "ml-0" : "-ml-[320px]"
        } h-screen w-full max-w-[320px] bg-[#3A563E] transition-all duration-[0.65s] ease-[0.85, 0.01, 0.4, 1] fixed left-0 z-40`}
      >
        <div className="py-[75px]">
          <div className="mx-[25px] mt-[25px]">
            <ul>
              <li className={style.listItem}>
                <a
                  onClick={() => {
                    setOpenNavigation(false), setIconOpen(false);
                  }}
                  href="#welcome"
                  className={style.listLink}
                >
                  Welcome
                </a>
              </li>
              <li className={style.listItem}>
                <a
                  onClick={() => {
                    setOpenNavigation(false), setIconOpen(false);
                  }}
                  href="#story"
                  className={style.listLink}
                >
                  Story
                </a>
              </li>
              <li className={style.listItem}>
                <a
                  onClick={() => {
                    setOpenNavigation(false), setIconOpen(false);
                  }}
                  href="#space"
                  className={style.listLink}
                >
                  Space
                </a>
              </li>
              <li className={style.listItem}>
                <a
                  onClick={() => {
                    setOpenNavigation(false), setIconOpen(false);
                  }}
                  href="#menu"
                  className={style.listLink}
                >
                  Menu
                </a>
              </li>
              <li className={style.listItem}>
                <a
                  onClick={() => {
                    setOpenNavigation(false), setIconOpen(false);
                  }}
                  href="#photos"
                  className={style.listLink}
                >
                  Gallery
                </a>
              </li>
              <li className={style.listItem}>
                <a
                  onClick={() => {
                    setOpenNavigation(false), setIconOpen(false);
                  }}
                  href="#make-reservation"
                  className={style.listLink}
                >
                  Reservation
                </a>
              </li>
              <li className={style.listItem}>
                <a
                  onClick={() => {
                    setOpenNavigation(false), setIconOpen(false);
                  }}
                  href="#contact"
                  className={style.listLink}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
