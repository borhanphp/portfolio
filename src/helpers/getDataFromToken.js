import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataFromToken = () => {
    try {
        const token = NextRequest.cookies.get( "token" )?.value || '';
        const decodedToken = jwt.verify( token, process.env.SECRET_TOKEN );
        return decodedToken.id;
    } catch ( error ) {
        throw new Error( error.message );
    }

}