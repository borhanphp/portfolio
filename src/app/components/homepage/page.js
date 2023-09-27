import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="bg-orange-100 h-[100vh]">
        <div className="grid place-content-center">
         {/* <div className="flex justify-center">
         <div>
            <Image src="borhan.svg" width={100} height={100} alt="" />
          </div>
         </div> */}
          <div className="grid place-content-center h-screen">
          <div>
            <p className="text-[86px] text-center text-[#9B4819]"><span className="italic">Hello,</span> I am Borhan!</p>
            <p className="text-center text-xl">Enjoying web development because its a combination of creativity and problem solving.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
