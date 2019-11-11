import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },

    password: {
        type: String,
        required: true,
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],

    createdAt: {
        type: Date,
        default: Date.now()
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

export default userSchema;