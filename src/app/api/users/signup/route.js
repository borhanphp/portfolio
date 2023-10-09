import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function POST() {
    try {
        const reqBody = await NextRequest.json()
        const { username, email, password } = reqBody

        console.log( reqBody );

        //check if user already exists
        const user = await User.findOne( { email } )

        if ( user ) {
            return NextResponse.json( { error: "User already exists" }, { status: 400 } )
        }

        //hash password
        const salt = await bcryptjs.genSalt( 10 )
        const hashedPassword = await bcryptjs.hash( password, salt )

        const newUser = new User( {
            username,
            email,
            password: hashedPassword
        } )

        const savedUser = await newUser.save()
        console.log( savedUser );

        //send verification email

        await sendEmail( { email, emailType: "VERIFY", userId: savedUser._id } )

        return NextResponse.json( {
            message: "User created successfully",
            success: true,
            savedUser
        } )




    } catch ( error ) {
        return NextResponse.json( { error: error.message }, { status: 500 } )

    }
}