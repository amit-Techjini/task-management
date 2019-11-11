import  mongoose  from "mongoose";

const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,

    },
    title: {
        type: String,
        trim: true,
        min: 3
    },
    body: {
        type: String,
        trim: true
    }
});

export default todoSchema;