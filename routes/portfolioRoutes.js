const express = require("express");

const { getExpandingCardPage, getPortfolioHome } = require("../controllers/portfolioController");

const router = express.Router();

router.route('/').get(getPortfolioHome);

router.route('/expanding_cards').get(getExpandingCardPage);


module.exports = router;
