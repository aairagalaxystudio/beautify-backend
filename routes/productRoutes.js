const express = require("express");
const router = express.Router();

// Static luxury products
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Royal Nude Press-On",
      price: 1499,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      name: "Pink Diamond Gloss",
      price: 1799,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      name: "Midnight Black Luxury",
      price: 1999,
      image: "https://via.placeholder.com/300"
    }
  ]);
});

module.exports = router;