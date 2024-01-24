import Image from 'next/image';
import React from 'react';
import data from '../../../../photoData.json';

const getSingleBlog = async ( slug ) => {
    console.log( 'slug', slug );

    const response = await fetch( `http://localhost:3000/api/blog/getBlog/${slug}` );
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
        <div className="md:max-w-4xl mx-auto text-center">
            <div className="border p-4">
                <div className="relative">
                    <Image
                        src={`${data[blog?.getBlog?.randomPhoto]?.src}`}
                        width={500}
                        height={500}
                        // style
                        // objectFit="contain"
                        // fill
                        alt={data[blog?.getBlog?.randomPhoto]?.alt}
                        className="w-full h-full top-0 left-0 object-cover"

                    />
                </div>
                <div className="text-5xl font-bold mt-2">{blog.getBlog?.title}</div>
                <div className="mt-2">{blog.getBlog?.body}</div>
            </div>
        </div>



    )
}

export default SingleBlog