import mongoose from "mongoose";
const {Schema} = mongoose; 

const messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true, 
    },
    recvId: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true, 
    },
    message: {
        type: String, 
        required: true, 
    }
}, {timestamps: true}); 

const Message = mongoose.model("Message", messageSchema); 

export default Message; 