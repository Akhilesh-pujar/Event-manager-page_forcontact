import jwt from "jsonwebtoken";
import JWT_SECRET from "./config.js";

  
function authMiddleware(req, res, next) {
    const authToken = req.headers.authorization; 
    if(!authToken){
        next();
    }
    else if(authToken){
        const token = authToken.split(" ")[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;

        next();

    }
    else{
        res.status(403).json({msg: "Authentication failed"})
    }
}

export default authMiddleware;