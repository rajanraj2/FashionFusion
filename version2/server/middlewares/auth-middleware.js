import jwt from "jsonwebtoken";
import User from "../models/user-model.js";

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');


    if (!token) {
        return res
        .status(401)
        .json({ message: "Authorization denied, token not provided" });
    }

    
    const jwtToken = token.replace('Bearer ', '').trim(); // remove Bearer from token
    
    // console.log("token from auth middleware ", jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
        
        const userData = await User.findOne({ email: isVerified.email }).
        select({
            password: 0,
        }); 
        
        // console.log(userData);

        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ message: "Invalid token" });
    }

    
};


export default authMiddleware;
