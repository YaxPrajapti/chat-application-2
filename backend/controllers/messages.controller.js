import mongoose from 'mongoose';
import Conversation from '../Model/conversationModel.js'
import Message from '../Model/messageModel.js'

export async function sendMessage(req, res, next) {
    try {
        const { message } = req.body;
        const { id: recvId } = req.params; //recv id. 
        const senderId = req.user._id;
        //fetch if any conversation. 
        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, recvId],
            }
        });
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recvId],
            })
        }
        const newMsg = new Message({ senderId, recvId, message });
        if (newMsg) {
            conversation.messages.push(newMsg._id);
        }
        await Promise.all([conversation.save(), newMsg.save()]);
        return res.status(201).json(newMsg);
    } catch (error) {
        console.log("error in send message controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function getMessages(req, res, next) {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, userToChatId]
            }
        }).populate("messages");
        if(!conversation){
            return res.status(200).json([]);
        }
        const message = conversation.messages;
        console.log(message);
        res.status(200).json(message);
    } catch (error) {
        console.log("error in send message controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}