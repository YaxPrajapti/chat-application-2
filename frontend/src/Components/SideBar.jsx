
import useGetConversation from "../Hooks/useGetConversation";
import UserList from "./UserList";
const SideBar = () => {
    const { loading, conversation } = useGetConversation();
    return (
        <>
            {!loading ?
                <UserList conversation={conversation}/>
                :
                <span className="loading loading-dots loading-md"></span>
            }
        </>
    );
};
export default SideBar;
