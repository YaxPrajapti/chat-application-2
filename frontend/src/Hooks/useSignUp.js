import {useState} from 'react'; 
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContextProvider.jsx';
const useSignup = () => {
    const {setAuthuser} = useAuthContext(); 
    const [loading, setLoading] = useState(false); 
    const signup = async (input) => {
        const {name, username, email, password, confirmPassword, gender, bio} = input; 
        const success = handleInputErrors({name, username, email, password, confirmPassword, gender, bio}); 
        if(!success){
            return; 
        }
        setLoading(true); 
        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify({name, username, email, password, confirmPassword, gender, bio}), 

            })
            const data = await response.json(); 
            if(data.error){
                throw new Error(data.error); 
            }
            localStorage.setItem("chat-user", JSON.stringify(data)); 
            setAuthuser(data); 
        } catch (error) {
            toast.error(error.message); 
        }finally{
            setLoading(false); 
        }
    }
    return {loading, signup}; 
}

const handleInputErrors = ({name, username, email, password, confirmPassword, gender, bio}) => {
    if(!name || !username || !email || !password || !confirmPassword || !gender || !bio){
        toast.error("Please leave input fields empty"); 
        return false; 
    }
    if(password !== confirmPassword){
        toast.error("Password did not match"); 
        return false; 
    }
    if(password.length < 6){
        toast.error("Password must be greater than 6 characters"); 
        return false; 
    }
    return true; 
}
export default useSignup