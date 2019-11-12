import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
        validate: {
            validator: val => validator.isEmail(val),
            message: props => `${props.value} is not valid`
        },
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