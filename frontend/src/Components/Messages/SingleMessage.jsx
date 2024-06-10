import { useAuthContext } from "../../Context/AuthContextProvider";
import userConversation from "../../zustad/useConversation";
import {extractTime} from '../../utils/dateFromTimeStamp.js'; 

const SingleMessage = ({ message }) => {
    
    // eslint-disable-next-line no-unused-vars
    const { selectedConversation, setSelectedConversation } = userConversation();
    const { authuser } = useAuthContext();
    const fromMe = message.senderId === authuser._id;
    const dateString = message.createdAt;
    const date = extractTime(dateString);
    return (
        <>
            <div className={fromMe ? "chat chat-end" : "chat chat-start"}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={fromMe ? authuser.profile : selectedConversation.profilePic} />
                    </div>
                </div>
                <div className="chat-header">
                    {fromMe ? authuser.username : selectedConversation.username}
                </div>
                <div className="chat-bubble">{message.message}</div>
                <div className="chat-footer opacity-50 flex gap-1 items-end">
                    <time className="text-xs opacity-50"> {date}</time>
                    <div>
                        {fromMe && (<p className="text-xs">Delivered</p>)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleMessage;
//message obj {_id, senderId, recvId, message, createdAt, updatedAt, __v})