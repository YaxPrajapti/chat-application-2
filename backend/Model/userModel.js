import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
    },
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
    }, 
    password: {
        type: String, 
        required: true, 
    },
    gender: {
        type: String, 
        required: true, 
        default: "not to declare", 
        enum: ["male", "female", "not to declare"]
    },
    profilePic: {
        type: String, 
        default: "", 
    },
    bio: {
        type: String, 
        required: true, 
    }

}, {timestamps: true}); 

const User = mongoose.model("User", userSchema); 
export default User; 