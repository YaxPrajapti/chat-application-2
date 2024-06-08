import MessageList from "./Messages/MessageList";
import NochatSelected from "./Messages/NochatSelected";

const ChatBox = () => {
    const nochatSelected = true;
    return (
        <div className="bg-base-200 w-full h-svh flex flex-col rounded-box p-2">
            {nochatSelected ?
                (< NochatSelected />)
                :
                (<>
                    <div className="bg-base-300 p-4 rounded-t-box flex items-center">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-10 h-10 rounded-full mr-4" />
                        <h2 className="text-lg font-bold">Yax</h2>
                    </div>
                    <div className="flex-grow overflow-auto">
                        <MessageList />
                    </div>
                    <div className="flex flex-col justify-end">
                        <div className="flex items-center w-full">
                            <input type="text" placeholder="Type here" className="input input-bordered flex-grow" />
                            <button className="btn btn-primary ml-2">Send</button>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default ChatBox;
