const express = require("express");

const { getExpandingCardPage, getPortfolioHome, getBlurryLoadingPage, rotatingNavigation } = require("../controllers/portfolioController");

const router = express.Router();

router.route('/').get(getPortfolioHome);

router.route('/expanding_cards').get(getExpandingCardPage);

router.route('/blurry_loading').get(getBlurryLoadingPage);

router.route("/rotating_navigation").get(rotatingNavigation);

module.exports = router;
