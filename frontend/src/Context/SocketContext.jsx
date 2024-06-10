import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContextProvider";
import { io } from "socket.io-client";

const SocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineusers, setOnlineUsers] = useState([]);
    const { authuser } = useAuthContext();
    useEffect(() => {
        if (authuser) {
            const socket = io('https://lets-talk-udt1.onrender.com/', {
                query: {
                    userId: authuser._id,
                }
            });
            setSocket(socket);
            socket.on('getOnlineUser', (users) => {
                console.log(users);
                setOnlineUsers(users);
            })
            return () => {
                socket.close();
            }
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authuser]);
    return (
        <SocketContext.Provider value={{ socket, onlineusers }}>
            {children}
        </SocketContext.Provider>
    )
}

