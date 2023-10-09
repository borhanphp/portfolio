"use client"

import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="bg-orange-100 h-[100vh]">
      <div className="grid place-content-center ">
        {/* <div className="flex justify-center">
         <div>
            <Image src="borhan.svg" width={100} height={100} alt="" />
          </div>
         </div> */}
        <div className="grid place-content-center h-screen relative">
          <div>
            <p className="text-[60px] text-center text-[#9B4819]">
              Let's Connect!
            </p>
          </div>
          <div className="text-center mt-4">
            <Link
              href="https://www.linkedin.com/in/tsmborhan"
              className="border-2 px-3 py-1 text-white bg-[#9B4819]"
            >
              You can send me messages by clicking here.
            </Link>
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomePage