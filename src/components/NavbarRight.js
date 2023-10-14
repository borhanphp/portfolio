import Link from 'next/link'
import { Home, Lock, Server } from 'react-feather'

const NavbarRight = () => {
    const data = [
        {
            title: 'Home Page',
            icon: <Home />,
            link: '/'
        },
        {
            title: 'About',
            icon: <Server />,
            link: '/about'
        },
        {
            title: 'Login',
            icon: <Lock />,
            link: '/login'
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
            <div className="absolute right-0 grid place-content-center h-screen">
                {
                    data && data.map( ( item, index ) => {
                        return (
                            <div key={index} className='flex items-center justify-end mb-2'>
                                <div className='group flex items-center'>
                                    <div className='hidden group-hover:block hover:-translate-x-1 hover:scale-110 duration-300'>
                                        <div className='flex items-center '>
                                            <div className='border-2 rounded-lg px-3 py-1 bg-orange-400 text-black'>
                                                <Link href={item?.link}>
                                                    <p>{item?.title}</p>
                                                </Link>
                                            </div>
                                            <div className='p-1 bg-orange-400 navbar-right-clip-path-icon ml-[-2px]'></div>
                                        </div>
                                    </div>

                                    <div>
                                        <Link href={item?.link}>
                                            <div className="p-2 cursor-pointer border-2 border-black rounded-full text-black text-sm">
                                                {item?.icon}
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default NavbarRight