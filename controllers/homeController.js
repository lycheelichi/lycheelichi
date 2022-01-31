
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async")



exports.homePage = asyncHandler(async(req,res,next)=>{
    res.render("index",{greeting:"hello",name:"LiChi"})
})


exports.toolsPage = asyncHandler(async(req,res,next)=>{
    res.render('pages/tools');
})


exports.contactPage = asyncHandler(async(req,res,next)=>{
    res.render('pages/contact');
})

exports.portfolioPage = asyncHandler(async(req,res,next)=>{
    res.render("pages/portfolio");
})