import { useState } from "react";
import userConversation from "../zustad/useConversation";


const UserList = ({ conversation }) => {
    const { selectedConversation, setSelectedConversation } = userConversation();
    const [isSelected, setIsSelected] = useState(false);

    return (
        <>
            <ul className="menu h-fit bg-base-200 w-56 rounded-box">
                {conversation.map((conv) => (
                    <li key={conv._id} onClick={() => { setSelectedConversation(conv); setIsSelected(true) }}>
                        <a className={isSelected && selectedConversation._id === conv._id ? "bg-primary" : ""}>
                            <div className="avatar online">
                                <div className="w-6 rounded-full">
                                    <img src={conv.profilePic} />
                                </div>
                            </div>
                            {conv.username}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default UserList; 