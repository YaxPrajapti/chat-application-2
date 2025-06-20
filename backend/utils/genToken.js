import jwt from 'jsonwebtoken'; 

const genToken = (userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "2 days"
    }); 
    return token; 
}

export default genToken; 