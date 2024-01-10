import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <>

            <Navbar />
            <div className="md:flex items-center justify-between px-5 gap-5 py-5 border-4 p-50">
                <div className='flex items-center justify-center float-center border-4 order-2'>
                    <div className=''>
                        <Image
                            className='rounded-full w-[300px] h-[300px]'
                            src="/image.jpg"
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className='border-4 order-1'>
                    <p className='text-4xl text-center'>Lets build something exciting together</p>
                    <div className='flex items-center justify-center gap-3 mt-2'>
                        <div>React js</div>
                        <div>Next js</div>
                        <div>Redux</div>
                        <div>Express js</div>
                        <div>Node js</div>
                        <div>Mongo DB</div>
                    </div>
                    <div className='flex items-center justify-center gap-3 pt-2'>
                        <Link href="https://www.linkedin.com/in/tsmborhan">
                            <button className="bg-[#FB923C] py-2 px-3 rounded-sm">Connect on LinkedIn</button>
                        </Link>
                    </div>
                </div>


            </div>


        </>
    )
}

export default HeroSection