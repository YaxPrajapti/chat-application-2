import { useState } from "react";
import useSendMessage from "../../Hooks/useSendMessage";
import toast from "react-hot-toast";

const MessageInput = () => {
    const [msg, setMsg] = useState("");
    const {loading, sendMessage} = useSendMessage();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!msg){
            return toast.error("Message can't be empty"); 
        }
        await sendMessage(msg); 
        setMsg(""); 
    }   
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-end">
                <div className="flex items-center w-full">
                    <input type="text" placeholder="Type here" className="input input-bordered flex-grow" value={msg} onChange={(e) => setMsg(e.target.value)} />
                    <button className="btn btn-primary ml-2" type="submit">
                        {!loading ? "submit" : <span className="loading loading-infinity loading-md"></span>}
                    </button>
                </div>
            </div>
        </form>
    )
}
export default MessageInput;