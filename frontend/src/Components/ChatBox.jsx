import MessageInput from "./Messages/MessageInput.jsx";
import MessageList from "./Messages/MessageList";
import NochatSelected from "./Messages/NochatSelected";
import useConversation from '../zustad/useConversation.js'; 

const ChatBox = () => {
    const {selectedConversation, setSelectedConversation} = useConversation(); 
    return (
        <div className="bg-base-200 w-full h-svh flex flex-col rounded-box p-2">
            {!selectedConversation ?
                (< NochatSelected />)
                :
                (<>
                    <div className="bg-base-300 p-4 rounded-t-box flex items-center">
                        <img src={selectedConversation.profilePic} className="w-10 h-10 rounded-full mr-4" />
                        <h2 className="text-lg font-bold">{selectedConversation.username}</h2>
                    </div>
                    <div className="flex-grow overflow-auto">
                        <MessageList />
                    </div>
                    <MessageInput />
                </>)
            }
        </div>
    );
};

export default ChatBox;
