const asyncHandler = require("./async");
const errorResponse = require("../utils/errorResponse");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");
const ErrorResponse = require("../utils/errorResponse");


exports.routeProtector = asyncHandler(async (req,res,next)=>{
    let token;

// checking if token from the REQUEST exists, if it does, assign the value to the token variable
    if(req.headers.authorization && req.headers.authorization.startWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];

    } else if(req.cookies.token){
        token = req.cookies.token;
    }
// --------------//
    if(!token){
        return next(new ErrorResponse('Access denied',401));
    }

    try{
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decodedToken.id);
        next();
    } catch(error){
        return next(new ErrorResponse(error, 401));
    }
});