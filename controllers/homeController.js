
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async")



exports.homePage = asyncHandler(async(req,res,next)=>{
    res.render("index",{greeting:"hello",name:"LiChi"});
})

exports.resumePage = asyncHandler(async(req,res,next)=>{
    res.render('pages/resume');
})

exports.contactPage = asyncHandler(async(req,res,next)=>{
    res.render('pages/contact');
})