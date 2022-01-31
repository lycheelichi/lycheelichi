const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const User = require('../models/Users')



exports.getUserHomePage = asyncHandler(async (req,res,next)=>{
    let userId = req.user.id;
    
    const user = await User.findById(req.user.id);

    if(!user){
        return next(new ErrorResponse('credential denied', 404))
    }

    res.render('../views/pages/dashboard')
})