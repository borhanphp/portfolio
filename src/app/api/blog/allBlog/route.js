import { connect } from '@/dbConfig/dbConfig';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

connect()

export async function GET() {
    try {
        const allBlogs = await Blog.find( {} );
        return NextResponse.json( {
            allBlogs
        } )
    } catch ( error ) {
        return NextResponse.json( {
            error: 'Something went wrong'
        } )
    }
}