import { useAuthContext } from "../../Context/AuthContextProvider";

const NochatSelected = () => {
    const {authuser} = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl">
                <p>welcome {authuser.username},</p>
                <p>Select a chat to start conversation</p>
            </div>

        </div>
    )
}
export default NochatSelected; 