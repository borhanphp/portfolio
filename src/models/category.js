import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            max: 32
        },
        slug: {
            type: String,
            unique: true,
            index: true
        },
        show: {
            type: String
        },
    },
    { timestamps: true }
);

const Category = mongoose.models.categories || mongoose.model( "categories", categorySchema );

export default Category;