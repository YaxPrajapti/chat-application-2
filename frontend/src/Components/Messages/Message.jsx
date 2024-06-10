
import userConversation from "../../zustad/useConversation";
import useGetAllMessages from "../../Hooks/useGetAllMessages.js";
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx'
import SingleMessage from "./SingleMessage.jsx";
import { useEffect, useRef } from "react";
import useListenMessage from "../../Hooks/useListenMessage.js";

const Message = () => {
    // eslint-disable-next-line no-unused-vars
    const { selectedConversation, setSelectedConversation } = userConversation();
    const { loading, messages } = useGetAllMessages();
    useListenMessage(); 
    const lastmessage = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            lastmessage.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);
    return (
        <>
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastmessage}>
                    <SingleMessage message={message} />
                </div>
            ))}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
            {!loading && messages.length === 0 && (
                <p>Start a new conversation with {selectedConversation.username}</p>
            )}
        </>
    )
}
export default Message; 
