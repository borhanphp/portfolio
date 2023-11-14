"use client"

import HeroSection from '@/components/client/HeroSection'
import Image from "next/image"

const HomePage = () => {
  return (
    <div className="container mx-auto">
      {/* hero section1 */}
      <HeroSection />
      {/* blog section */}
      <section>
        <div className="text-center my-6">
          <div><p className="text-4xl">My Thoughts</p></div>
          <div><p className="text-2xl">Explore new ways to use technology in your daily life</p></div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <div className="border p-2">
              <div className="text-center">
                <Image src="/image.jpg" width={400} height={100} alt="borhan uddin" />
              </div>
              <div><p className="text-2xl font-bold text-center">This is a superb headline that is made for practice</p></div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="border p-2">
              <div className="text-center">
                <Image src="/image.jpg" width={400} height={100} alt="borhan uddin" />
              </div>
              <div><p className="text-2xl font-bold text-center">This is a superb headline that is made for practice</p></div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="border p-2">
              <div className="text-center">
                <Image src="/image.jpg" width={400} height={100} alt="borhan uddin" />
              </div>
              <div><p className="text-2xl font-bold text-center">This is a superb headline that is made for practice</p></div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="border p-2">
              <div className="text-center">
                <Image src="/image.jpg" width={400} height={100} alt="borhan uddin" />
              </div>
              <div><p className="text-2xl font-bold text-center">This is a superb headline that is made for practice</p></div>
            </div>
          </div>


        </div>
      </section>

    </div>
  )
}

export default HomePage