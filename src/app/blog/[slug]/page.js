import Image from 'next/image';
import React from 'react';
import { API } from '../../../../config';
import data from '../../../../photoData.json';

const getSingleBlog = async ( slug ) => {
    console.log( 'slug', slug );

    const response = await fetch( `${API}/blog/getBlog/${slug}` );
    if ( !response.ok ) {
        throw new Error( "faild" );
    }
    const resData = response?.json();
    return resData;
}

const SingleBlog = async ( { params } ) => {
    const { slug } = params;
    const blog = await getSingleBlog( slug );
    console.log( blog );

    return (
        <div className="md:max-w-3xl mx-auto text-center">
            <div className="p-4">
                {/* <div className="">
                    <div>Author: Borhan Uddin</div>
                </div> */}
                <div className="relative">
                    <Image
                        src={`${data[blog?.getBlog?.randomPhoto]?.src}`}
                        width={400}
                        height={400}
                        // style
                        // objectFit="contain"
                        // fill
                        alt={data[blog?.getBlog?.randomPhoto]?.alt}
                        className="w-full h-full top-0 left-0 object-cover"

                    />
                </div>
                <div className="text-5xl font-bold mt-4 mb-1">{blog.getBlog?.title}</div>

                <div className="mt-2 text-[18px] text-justify">{blog.getBlog?.body}</div>
            </div>
        </div>



    )
}

export default SingleBlog