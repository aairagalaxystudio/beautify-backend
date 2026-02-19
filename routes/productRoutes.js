const express = require("express");
const router = express.Router();

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
      name: "French Classic",
      price: 1299,
      image: "https://via.placeholder.com/300"
    }
  ]);
});

module.exports = router;