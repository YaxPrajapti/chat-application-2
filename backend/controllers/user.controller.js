import User from '../Model/userModel.js';
import mongoose from 'mongoose';

export async function getUserForSideBar(req, res, next) {
    try {
        const loggedInUserID = req.user._id;
        const filterdUsers = await User.find({ _id: { $ne: loggedInUserID } }).select("-password"); 
        res.status(200).json(filterdUsers);
    } catch (error) {
        console.error("Error in getUserForSideBar controller: ", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}