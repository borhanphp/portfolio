import { connect } from '@/dbConfig/dbConfig'; // Replace with your database configuration
import User from '@/models/user'; // Replace with your User model import

export default async function handler( req, res ) {
    if ( req.method === 'POST' ) {
        try {
            // Connect to the database
            await connect();

            // Extract user data from the request body
            const { username, email, password } = req.body;

            // Create a new user instance
            const newUser = new User( {
                username,
                email,
                password,
            } );

            // Save the user to the database
            await newUser.save();

            return res.status( 201 ).json( { message: 'User created successfully' } );
        } catch ( error ) {
            console.error( 'Error creating user:', error );
            return res.status( 500 ).json( { error: 'Server error' } );
        }
    } else {
        // Handle other HTTP methods if needed
        return res.status( 405 ).json( { error: 'Method not allowed' } );
    }
}




// import { connect } from "@/dbConfig/dbConfig";
// import { sendEmail } from "@/helpers/mailer";
// import User from "@/models/user";
// import bcryptjs from "bcryptjs";
// import { NextRequest, NextResponse } from "next/server";


// connect()


// export async function POST() {

//     try {
//         const reqBody = await NextRequest.json()

//         const { username, email, password } = reqBody

//         console.log( 'req body', reqBody );

//         //check if user already exists
//         const user = await User.findOne( { email } )

//         if ( user ) {
//             return NextResponse.json( { error: "User already exists" }, { status: 400 } )
//         }

//         //hash password
//         const salt = await bcryptjs.genSalt( 10 )
//         const hashedPassword = await bcryptjs.hash( password, salt )

//         const newUser = new User( {
//             username,
//             email,
//             password: hashedPassword
//         } )

//         const savedUser = await newUser.save()
//         console.log( savedUser );

//         //send verification email

//         await sendEmail( { email, emailType: "VERIFY", userId: savedUser._id } )

//         return NextResponse.json( {
//             message: "User created successfully",
//             success: true,
//             savedUser
//         } )




//     } catch ( error ) {
//         console.log( 'error', error )
//         return NextResponse.json( { error: error.message }, { status: 500 } )

//     }
// }
