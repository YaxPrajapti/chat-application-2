import { useState } from "react"
import { useAuthContext } from "../Context/AuthContextProvider";
import toast from "react-hot-toast";
import userConversation from "../zustad/useConversation";

const useLogout = () => {
    const [loading, setLoading] = useState(false); 
    const {setAuthuser} = useAuthContext(); 
    const{setSelectedConversation} = userConversation();
    const logout = async () => {
        setLoading(true); 
        try {
            const res = await fetch('/api/auth/logout', {
                method: "POST", 
                headers: {"Content-Type": "application/json"}
            }); 
            const data = await res.json(); 
            if(data.error){
                throw new Error(data.error); 
            }
            localStorage.removeItem("chat-user"); 
            setAuthuser(null); 
            setSelectedConversation(null); 
        } catch (error) {
            toast.error(error.message); 
        }finally {
            setLoading(false); 
        }
    }
    return {loading, logout}; 
}
export default useLogout; 