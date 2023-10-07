"use client"

import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="bg-orange-100 h-[100vh]">
        <div className="grid place-content-center relative">
          {/* <div className="flex justify-center">
         <div>
            <Image src="borhan.svg" width={100} height={100} alt="" />
          </div>
         </div> */}
          <div className="grid place-content-center h-screen relative px-12">
            <div>
              <p className="text-[50px] text-center text-[#9B4819]">
                <span className="italic">Hello,</span> World!
              </p>
              <p className="text-center text-3xl">
                Enjoying web development because its a combination of creativity
                and problem solving.
              </p>
            </div>
            <div className="text-center mt-4">
              <Link
                href="https://www.linkedin.com/in/tsmborhan"
                className="border-2 px-3 py-1 text-white bg-[#9B4819]"
              >
                Get in Touch
              </Link>
            </div>
          </div>


        </div>


      </div>
    </>
  );
};

export default HomePage;
