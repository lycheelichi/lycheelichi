const express = require("express");
const { signinPage, signupPage } = require("../controllers/authController");

const router = express.Router();


router.route('/signin').get(signinPage);

router.route('/signup').get(signupPage);



module.exports = router;
