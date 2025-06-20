import path from 'path';
import express from "express";
import dotenv from 'dotenv'
import morgan from "morgan";
import cors from "cors";
import cookieParser from 'cookie-parser'
import { app, io, server } from './Socket/socket.js';
import helmet from 'helmet';
import compression from 'compression';
dotenv.config({ path: "../.env" });

//import local modules;
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/messages.routes.js"
import userRoutes from './routes/user.routes.js'

import connect from './databse/connectToDB.js'

const __dirname = path.resolve();

//env vars; 
const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            //  "default-src" used as fallback for any undeclared directives
            "default-src": ["'self'"],
            // I have stripe_set up
            "script-src": ["'self'", "'unsafe-inline'", "js.stripe.com"],
            "style-src": ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
            "frame-src": ["'self'", "js.stripe.com"],
            "font-src": [
                "'self'",
                "fonts.googleapis.com",
                "fonts.gstatic.com",
                "res.cloudinary.com/",
            ],
            "img-src": ["'self'", "data:", "https://res.cloudinary.com"],
        },
        reportOnly: true,
    })
);

//middlewares: 
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/user', userRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})

server.listen(PORT, () => {
    connect();
    console.log(`Server started on ${PORT}`);
})