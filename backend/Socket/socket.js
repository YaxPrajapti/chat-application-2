import { Server } from 'socket.io';
import http from 'http';
import express from 'express'

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
});
const userSocketMap = {}; //{userId : socketId}; 

export const getRecvSocketId = (recvUserId) => {
    return userSocketMap[recvUserId]; 
}

io.on('connection', (socket) => {
    console.log("New user connected", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
        console.log("Map: ", userSocketMap);
    }
    socket.emit('getOnlineUser', Object.keys(userSocketMap));
    socket.on('disconnect', () => {
        console.log("User with socket id: ", socket.id, " disconnected");
        delete userSocketMap[userId];
        socket.emit('getOnlineUser', Object.keys(userSocketMap));
    })
})

export { app, io, server }; 