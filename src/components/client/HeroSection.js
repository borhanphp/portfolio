import Image from "next/image"
import Link from 'next/link'
import Navbar from './Navbar'

const HeroSection = () => {
    return (
        <>

            <Navbar />
            <div className="flex items-center justify-between px-5 gap-5 border-2 py-5">
                <div className=''>
                    {/* <p className='text-4xl text-center'>Lets build something exciting together</p> */}
                    <div className='flex items-center justify-center gap-3'>
                        <div>React js</div>
                        <div>Next js</div>
                        <div>Redux</div>
                        <div>Express js</div>
                        <div>Node js</div>
                        <div>Mongo DB</div>
                    </div>
                    <div className='flex items-center justify-center gap-3 pt-2'>
                        <Link href="https://www.linkedin.com/in/tsmborhan">
                            <button className="bg-orange-400 px-2 rounded-sm text-white">Connect on LinkedIn</button>
                            concent
                        </Link>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div>
                        <Image
                            src="/image.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default HeroSection