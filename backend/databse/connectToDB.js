import mongoose from "mongoose";

const connect = async () => {
    try {   
        await mongoose.connect(process.env.MONGO_URI); 
        console.log("Connected to mongodb"); 
        
    } catch (error) {
        console.log("Error in connecting mongodb: ", error.message);
    }
}
export default connect; 