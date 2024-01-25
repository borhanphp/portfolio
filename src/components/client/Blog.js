"use client"

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import data from '../../../photoData.json';

const Blog = () => {
    const [blogs, setBlogs] = useState( [] );
    console.log( 'data', data );

    useEffect( () => {
        axios.get( '/api/blog/allBlog' )
            .then( ( res ) => {
                console.log( res );
                setBlogs( res.data.allBlogs );
            } )
    }, [] );

    return (
        <section className='container mx-auto'>
            <div className="text-center my-6">
                <div><p className="text-4xl">My Thoughts</p></div>
                <div><p className="text-2xl">Exploring new ways to use technology in my daily life</p></div>
            </div>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    blogs && blogs?.map( ( item, index ) => {
                        return (
                            <Fragment key={index}>
                                <Link href={`/blog/${item?.slug}`}>
                                    <div className="col-span-1 cursor-pointer mb-1 text-center">
                                        <div className="border p-2">
                                            <div className="text-center">
                                                <Image src={`${data[item?.randomPhoto]?.src}`} width={400}
                                                    height={100}
                                                    alt="borhan uddin"
                                                    className="w-full h-full top-0 left-0 object-cover"

                                                />
                                            </div>
                                            <div><p className="text-2xl font-bold text-center">{item?.title}</p></div>
                                        </div>
                                    </div>
                                </Link>
                            </Fragment>
                        )
                    } )
                }


            </div>
        </section>




    )
}

export default Blog