import { connect } from '@/dbConfig/dbConfig';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

connect()

export async function GET( NextRequest, { params } ) {
    const { slug } = params;
    try {

        const getBlog = await Blog.findOne( { slug } );
        return NextResponse.json( {
            getBlog
        } )
    } catch ( error ) {
        return NextResponse.json( {
            error: 'Something went wrong'
        } )
    }
}