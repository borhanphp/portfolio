import mongoose from 'mongoose';
const { Schema } = mongoose

const userSchema = new Schema( {
    name: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    slug: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true } )

const User = mongoose.model( 'User', userSchema );

export default User