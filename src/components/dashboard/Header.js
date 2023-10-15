"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Header = () => {
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get( '/api/users/logout' )
            toast.success( 'Logout successful' )
            router.push( '/login' )
        } catch ( error ) {
            toast.error( error.message )
        }
    }
    return (
        <div className='bg-gray-700 text-white p-1'>
            <div className='flex items-center justify-between'>
                <div>Heading</div>
                <div>
                    <div>User</div>
                    <button className='cursor-pointer' onClick={() => { logout() }}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Header