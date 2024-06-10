import React, { useEffect } from 'react'
import { useSocketContext } from '../Context/SocketContext'
import userConversation from '../zustad/useConversation';
import recv from '../assets/sounds/recv.wav'; 

const useListenMessage = () => {
    const { socket, onlineusers } = useSocketContext();
    const {messages, setMessages} = userConversation()
    useEffect(() => {
        socket?.on('new-message', (newMessage) => {
            const notificationSound = new Audio(recv); 
            notificationSound.play(); 
            setMessages([...messages, newMessage]); 
        })
        return() => {
            socket?.off('new-message')
        }
    },[socket, setMessages, messages]); 
}

export default useListenMessage