"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState( {
        email: "",
        password: "",
        username: "",
    } )
    const [buttonDisabled, setButtonDisabled] = React.useState( false );
    const [loading, setLoading] = React.useState( false );

    const onSignup = async () => {
        try {
            setLoading( true );
            const response = await axios.post( "/api/users/signup", user );
            console.log( "Signup success", response.data );
            router.push( "/login" );

        } catch ( error ) {
            console.log( "Signup failed", error.message );

            toast.error( error.message );
        } finally {
            setLoading( false );
        }
    }

    useEffect( () => {
        if ( user.email.length > 0 && user.password.length > 0 && user.username.length > 0 ) {
            setButtonDisabled( false );
        } else {
            setButtonDisabled( true );
        }
    }, [user] );


    return (
        <>
            <div className="flex items-center justify-center min-h-screen py-2">
                <div className="border p-6 w-[400px]">
                    <h1 className="text-center text-4xl mb-6">Sign Up</h1>
                    <hr />

                    {/* <label htmlFor="email">email</label> */}
                    <div className="">
                        <div>
                            <input
                                className="p-2 border border-gray-300 mb-4 w-full focus:outline-none focus:border-gray-600 text-black"
                                id="username"
                                type="text"
                                value={user.username}
                                onChange={( e ) => setUser( { ...user, username: e.target.value } )}
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <input
                                className="p-2 border border-gray-300 mb-4 w-full focus:outline-none focus:border-gray-600 text-black"
                                id="email"
                                type="email"
                                value={user.email}
                                onChange={( e ) => setUser( { ...user, email: e.target.value } )}
                                placeholder="Email Address"
                            />
                        </div>
                        <div>
                            {/* <label htmlFor="password">password</label> */}
                            <input
                                className="p-2 border border-gray-300 w-full mb-4 focus:outline-none focus:border-gray-600 text-black"
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={( e ) => setUser( { ...user, password: e.target.value } )}
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <button
                                className="border w-full p-2 bg-orange-400"
                                onClick={onSignup}>
                                {loading ? "Processing" : 'Signup'}
                            </button>
                        </div>

                        <div className="">
                            <div className="text-center">
                                Have an account? <Link href="/login" className="hover:text-orange-600">Login Here</Link>
                            </div>
                            <div className="text-center">
                                <Link href="/" className="hover:text-orange-600">Go Home</Link>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
        // <div className="flex flex-col items-center justify-center min-h-screen py-2">
        //     <h1>{loading ? "Processing" : "Signup"}</h1>
        //     <hr />
        //     <label htmlFor="username">username</label>
        //     <input
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        //         id="username"
        //         type="text"
        //         value={user.username}
        //         onChange={( e ) => setUser( { ...user, username: e.target.value } )}
        //         placeholder="username"
        //     />
        //     <label htmlFor="email">email</label>
        //     <input
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        //         id="email"
        //         type="text"
        //         value={user.email}
        //         onChange={( e ) => setUser( { ...user, email: e.target.value } )}
        //         placeholder="email"
        //     />
        //     <label htmlFor="password">password</label>
        //     <input
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        //         id="password"
        //         type="password"
        //         value={user.password}
        //         onChange={( e ) => setUser( { ...user, password: e.target.value } )}
        //         placeholder="password"
        //     />
        //     <button
        //         onClick={onSignup}
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
        //     <Link href="/login">Visit login page</Link>
        // </div>
    )

}