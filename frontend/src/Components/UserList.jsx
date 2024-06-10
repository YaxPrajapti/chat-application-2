import { useState } from "react";
import userConversation from "../zustad/useConversation";
import { useSocketContext } from "../Context/SocketContext";

const UserList = ({ conversation }) => {
    const { selectedConversation, setSelectedConversation } = userConversation();
    const { onlineusers } = useSocketContext();

    return (
        <ul className="menu h-fit bg-base-200 w-56 rounded-box">
            {conversation.map((conv) => {
                const isOnline = onlineusers.includes(conv._id);
                const isSelected = selectedConversation && selectedConversation._id === conv._id;

                return (
                    <li key={conv._id} onClick={() => setSelectedConversation(conv)}>
                        <a className={isSelected ? "bg-primary" : ""}>
                            <div className={`avatar ${isOnline ? "online" : ""}`}>
                                <div className="w-6 rounded-full">
                                    <img src={conv.profilePic} alt={conv.username} />
                                </div>
                            </div>
                            {conv.username}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default UserList;
