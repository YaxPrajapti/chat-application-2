import User from '../Model/userModel.js';
import bcrypt from 'bcrypt';

import genToken from '../utils/genToken.js';

export async function login(req, res, next) {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(401).json({ message: "Wrong login credentials" });
        }
        const isPassMatch = await bcrypt.compare(password, user.password);
        if (!isPassMatch) {
            return res.status(401).json({ message: "Wrong login credentials" })
        }
        const jwttoken = genToken(user._id);
        res.cookie("jwt", jwttoken, {
            maxAge: 15 * 24 * 60 * 60 * 1000, //MS format. 
            httpOnly: true, //prevent cross site scripting attack. 
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development"
        })
        res.status(200).json({ _id: user._id, name: user.name, username: user.username, profile: user.profilePic });
    } catch (error) {
        console.log("Error in login controller");
        res.status(500).send({ message: error.message })
    }
}
export async function signup(req, res, next) {
    try {
        const { name, username, email, password, confirmPassword, gender, profilePic, bio } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not match" });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User with this username already exists" });
        }
        const hashedPass = await bcrypt.hash(password, 10);

        //random avtar: https://avatar.iran.liara.run/public/boy?username=[value] https://avatar.iran.liara.run/public/girl?username=[value] 
        let profile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        if (gender == "female") {
            profile = `https://avatar.iran.liara.run/public/girl?username=${username}`
        }
        const newuser = new User({
            name, username, email, password: hashedPass, gender, profilePic: profile, bio
        });
        if (newuser) {
            //generate JWT tokens. 
            const jwttoken = genToken(newuser._id);
            res.cookie("jwt", jwttoken, {
                maxAge: 15 * 24 * 60 * 60 * 1000, //MS format. 
                httpOnly: true, //prevent cross site scripting attack. 
                sameSite: "strict",
                secure: process.env.NODE_ENV !== "development"
            })
            await newuser.save();
            res.status(201).json({ message: "New user created.", _id: newuser._id, name: newuser.name, username: newuser.username, profile: newuser.profilePic });
        } else {
            res.staus(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.log("Error in signup controller");
        res.status(500).send({ message: error.message })
    }
}

export async function logout(req, res, next) {
    try {
        res.clearCookie("jwt"); 
        res.status(200).json({ message: "Logout successfully"});
    } catch (error) {
        console.log("Error in signup controller");
        res.status(500).send({ message: error.message })
    }
}