import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="relative">
      <div
        className="bg-center bg-no-repeat w-full h-[130vh]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1517084166762-9edca41416e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80)`,
          backgroundSize: "100% 100%",
        }}
      ></div>

      <div className="absolute top-[25%] w-full z-10 text-center text-white px-[15px] lg:top-[40%]">
        <div className="absolute w-[95%] flex flex-col flex-nowrap text-center items-center justify-center lg:flex-row lg:w-[99%]">
          <div
            className="rellax text-[14px] tracking-[0.15em] max-w-[480px] p-[20px] mt-[10px] mb-[15px] lg:text-[16px]"
            data-rellax-speed="2"
            data-rellax-percentage="0.2"
          >
            <h3 className="font-bold">CONTACT US</h3>
            <br></br>
            <p className="italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div
            className="rellax text-[14px] tracking-[0.15em] max-w-[480px] p-[20px] mt-[30px] mb-[15px] lg:mt-[0] lg:text-[16px]"
            data-rellax-speed="2"
            data-rellax-percentage="0.2"
          >
            <h3 className="font-bold">OPENING HOURS</h3>
            <br></br>
            <p className="italic">11:00 - 21:00 (Lorem ipsum dolor sit amet)</p>
            <br></br>
            <p className="italic">
              (Lorem ipsum dolor sit amet, consectetur adipiscing elit)
            </p>
          </div>

          <div
            className="rellax text-[14px] tracking-[0.15em] max-w-[480px] p-[20px] mt-[30px] mb-[15px] lg:mt-[0] lg:text-[16px]"
            data-rellax-speed="2"
            data-rellax-percentage="0.2"
          >
            <h3 className="font-bold">CLOSES</h3>
            <br></br>
            <p className="italic">Every Monday</p>
            <br></br>
            <p className="italic">(Lorem ipsum dolor sit amet, consectetur)</p>
          </div>

          <div
            className="rellax text-[14px] tracking-[0.15em] max-w-[480px] p-[20px] mt-[30px] mb-[15px] lg:mt-[0] lg:text-[16px]"
            data-rellax-speed="2"
            data-rellax-percentage="0.2"
          >
            <h3 className="font-bold">CONNECT</h3>
            <br></br>

            <div className="flex items-center justify-evenly">
              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  className="lg:cursor-pointer"
                  style={{ fill: "#fff" }}
                >
                  <path
                    id="facebook-logo"
                    key={"facebook-logo"}
                    d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
                  ></path>
                </svg>
              </Link>

              <Link href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  className="lg:cursor-pointer"
                  style={{ fill: "#fff" }}
                >
                  <path
                    id="ins-logo"
                    key={"ins-logo"}
                    d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"
                  ></path>
                </svg>
              </Link>

              <PhoneIcon className="h-6 w-6 lg:cursor-pointer" />
            </div>

            <br></br>
            <p className="italic">or</p>
            <p className="italic underline mt-[15px]">name@gmail.com</p>
          </div>
        </div>
      </div>

      <div
        className="text-center text-white rellax text-[14px] tracking-[0.15em] max-w-[480px] mx-auto mb-[200px] mt-[100px] lg:mt-[0] lg:text-[16px]"
        data-rellax-speed="2"
        data-rellax-percentage="0.2"
      >
        <p>Copyright © 2023 name</p>
      </div>
    </div>
  );
};

export default Contacts;
