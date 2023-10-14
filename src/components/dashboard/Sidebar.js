import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='bg-gray-700 text-white h-screen p-5'>
            <div><Link href="/dashboard">Dashboard</Link></div>
            <div><Link href="/dashboard/blogs">Blogs</Link></div>
            <div><Link href="/dashboard/settings">Settings</Link></div>
        </div>
    )
}

export default Sidebar