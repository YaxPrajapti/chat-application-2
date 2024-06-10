import { useContext, useState } from "react";
import AuthContext from "./AuthContext.js"

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authuser, setAuthuser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    return (
        <AuthContext.Provider value={{ authuser, setAuthuser }}>
            {children}
        </AuthContext.Provider>
    )
}
