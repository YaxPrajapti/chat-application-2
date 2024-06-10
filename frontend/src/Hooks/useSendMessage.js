import { useState } from "react";
import userConversation from "../zustad/useConversation";
import toast from "react-hot-toast";
import recv from '../assets/sounds/recv.wav'; 

const useSendMessage = () => {
    const [loading, setLoading] = useState(false); 
    const {messages, setMessages, selectedConversation} = userConversation()
    const sendMessage = async (message) => {
        setLoading(true); 
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST", 
                headers: {
                    "Content-Type" : "application/json", 
                }, 
                body: JSON.stringify({message}),
            })
            const data = await res.json(); 
            if(data.error){
                throw new Error(data.error); 
            }
            const sendSound = new Audio(recv); 
            sendSound.play(); 
            setMessages([...messages, data]); 
        } catch (error) {
            toast.error(error.message); 
        }finally{
            setLoading(false); 
        }
    }
    return {loading, sendMessage}; 
}
export default useSendMessage; 