import Link from 'next/link'
import React from 'react'

const Blog = () => {
    const data = [
        {
            title: 'This is blog title one',
            photo: "/public/image.jpg",
            link: '/'
        },
        // {
        //     title: 'Portfolio',
        //     icon: <Briefcase />,
        //     link: '/portfolio'
        // },
        // {
        //     title: 'Gallery',
        //     icon: <Aperture />,
        //     link: '/gallery'
        // },
        // {
        //     title: 'Get in Touch',
        //     icon: <Mail />,
        //     link: '/contact-us'
        // }
    ]
    return (
        <div>
            <div className="absolute grid place-content-center h-screen">
                {
                    data && data.map( ( item, index ) => {
                        return (
                            <div key={index} className='mb-2 p-2'>
                                <div className=' border border-black mb-1 p-1'>
                                    <div className='ms-3'>
                                        <img src='image.jpg' alt='' style={{ width: "150px" }} />
                                    </div>
                                    <Link href={item?.link}>
                                        <p className='font-bold text-[20px]'>{item?.title}</p>
                                    </Link>
                                </div>
                                <div className=' border border-black mb-1 p-1'>
                                    <div className='ms-3'>
                                        <img src='image.jpg' alt='' style={{ width: "150px" }} />
                                    </div>
                                    <Link href={item?.link}>
                                        <p className='font-bold text-[20px]'>{item?.title}</p>
                                    </Link>
                                </div>
                                <div className=' border border-black mb-1 p-1'>
                                    <div className='ms-3'>
                                        <img src='image.jpg' alt='' style={{ width: "150px" }} />
                                    </div>
                                    <Link href={item?.link}>
                                        <p className='font-bold text-[20px]'>{item?.title}</p>
                                    </Link>
                                </div>
                                <div className=' border border-black mb-1 p-1'>
                                    <div className='ms-3'>
                                        <img src='image.jpg' alt='' style={{ width: "150px" }} />
                                    </div>
                                    <Link href={item?.link}>
                                        <p className='font-bold text-[20px]'>{item?.title}</p>
                                    </Link>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default Blog