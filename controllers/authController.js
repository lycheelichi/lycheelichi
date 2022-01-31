
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async")


exports.signinPage = asyncHandler(async(req,res,next)=>{
    res.render('pages/signin');
})

exports.signupPage = asyncHandler(async(req,res,next)=>{
    res.render("pages/signup");
})

