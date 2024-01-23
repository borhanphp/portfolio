import mongoose from "mongoose";
const ObjectId = mongoose.Schema;

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true
        },
        body: {
            type: {},
            required: true,
            min: 200,
            max: 2000000
        },
        excerpt: {
            type: String,
            max: 1000
        },
        mTitle: {
            type: String
        },
        mDesc: {
            type: String
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        // categories: [{ type: ObjectId, ref: 'Category', required: false }],
        tags: {
            type: [String],
            required: false,
            default: []
        },
        status: {
            type: String,
            default: "published"
        },
        featured: {
            type: String,
            default: "no"
        },
        count: {
            type: Number,
            default: "0"
        }
    },
    { timestamps: true }
);

const Blog = mongoose.models.blogs || mongoose.model( "blogs", blogSchema );

export default Blog;