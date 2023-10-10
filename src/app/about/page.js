"use client"

import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
    return (
        <div className="bg-orange-100 h-[100vh]">
            <div className="grid place-content-center ">

                <div className=" relative">
                    <div>
                        <p className="text-[50px] text-center text-[#9B4819]">
                            Tell Me About Yourself !
                        </p>
                    </div>
                    <div className="text-center mt-2">
                        <Link
                            href="https://www.linkedin.com/in/tsmborhan"
                            className="border-2 px-3 py-1 text-white bg-[#9B4819]"
                        >
                            You can send me messages by clicking here.
                        </Link>
                    </div>
                </div>
                <div className='mt-3'>
                    <img src='aboutme.png' alt='' />
                </div>

            </div>
        </div>
    )
}

export default AboutPage