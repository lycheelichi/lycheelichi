const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

var path = require("path");

exports.getPortfolioHome = asyncHandler(async(req,res,next)=>{
    res.render("pages/portfolio");
})

exports.getExpandingCardPage = asyncHandler(async (req,res,next)=>{
    res.render('pages/frontend-projects/expanding_cards/expanding_cards.ejs');
});

exports.getBlurryLoadingPage = asyncHandler(async (req,res,next)=>{
    res.render('pages/frontend-projects/blurry_loading/blurry_loading.ejs');
})

exports.scrollAnimation = asyncHandler(async(req,res,next)=>{
    res.render('pages/frontend-projects/scroll_animation/scroll_animation');
})

exports.rotatingNavigation = asyncHandler(async(req,res,next)=>{
    res.render('pages/frontend-projects/rotating_navigation/rotating_navigation.ejs');
})