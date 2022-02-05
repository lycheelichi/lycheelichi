const express = require("express");

const {homePage,resumePage, contactPage} = require("../controllers/homeController");
const asyncHandler = require("../middleware/async");

const router = express.Router();

router.route("/").get(homePage);

router.route("/resume").get(resumePage);

router.route('/contact').get(contactPage);

module.exports = router;

