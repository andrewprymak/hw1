  
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>home page</h1>");
});
router.get("/about", (req, res, next) => {
    res.send("<h1>About page</h1>");
});
router.get("/contact", (req, res, next) => {
    res.send("<h1>Phone: 0 000 000 000</h1>");
});
router.get("/products", (req, res, next) => {
    res.send("<h1>Our Products</h1>");
});

module.exports = router;