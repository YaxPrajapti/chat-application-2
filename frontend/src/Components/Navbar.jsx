import { Link } from "react-router-dom";
import useLogout from "../Hooks/useLogout";
import { useAuthContext } from "../Context/AuthContextProvider";
import { useState } from "react";
import userConversation from "../zustad/useConversation";
import useGetConversation from "../Hooks/useGetConversation";
import toast from "react-hot-toast";

const Navbar = () => {
    const { loading, logout } = useLogout();
    const { authuser } = useAuthContext();
    const [search, setSearch] = useState("");
    const {setSelectedConversation} = userConversation(); 
    const {conversation} = useGetConversation()

    const handleSearch = (e) => {
        e.preventDefault(); 
        if(!search){
            return; 
        }
        if(search.length < 2){
            return toast.error("Search name shoud be greater than 3 chars long"); 
        }
        const selectedConv = conversation.find((c) => c.name.toLowerCase().includes(search.toLowerCase())); 
        if(selectedConv){
            setSelectedConversation(selectedConv); 
            setSearch(""); 
        }else{
            toast.error("No such user found"); 
        }
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">{"Let's"} Talk</Link>
            </div>
            <>
                {authuser ?
                    <div className="flex-none gap-2">
                        <form onSubmit={handleSearch}>
                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" value={search} onChange={(e) => setSearch(e.target.value)} />
                            </div>
                        </form>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={authuser.profile} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><a onClick={logout}>Logout</a></li>
                            </ul>
                        </div>
                    </div> : ""}
            </>
        </div>
    )
}
export default Navbar; 