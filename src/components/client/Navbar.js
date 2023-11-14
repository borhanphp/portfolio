import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const navContents = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Portfolio",
            link: "/"
        },
        {
            name: "About",
            link: "/"
        },
        {
            name: "Contact",
            link: "/"
        },
        {
            name: "Login",
            link: "/login"
        }
    ]
    return (
        <div className="flex items-center justify-center gap-5 p-5">
            {
                navContents?.map( ( item ) => {
                    return (
                        <>
                            <div className="cursor-pointer"><Link href={item?.link}>{item?.name}</Link></div>
                        </>
                    )
                } )
            }

        </div>
    )
}

export default Navbar