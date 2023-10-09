import { connect } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function GET() {

    try {
        const userId = await getDataFromToken( NextRequest );
        const user = await User.findOne( { _id: userId } ).select( "-password" );
        return NextResponse.json( {
            mesaaage: "User found",
            data: user
        } )
    } catch ( error ) {
        return NextResponse.json( { error: error.message }, { status: 400 } );
    }

}