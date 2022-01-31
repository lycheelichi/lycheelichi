const express = require("express");

const {homePage, toolsPage, contactPage, portfolioPage} = require("../controllers/homeController");
const asyncHandler = require("../middleware/async");

const router = express.Router();

router.route("/").get(homePage);

router.route("/tools").get(toolsPage);

router.route('/contact').get(contactPage);

router.route("/portfolio").get(portfolioPage);


module.exports = router;

