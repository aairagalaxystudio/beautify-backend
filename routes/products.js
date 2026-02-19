const express = require("express");
const router = express.Router();

/**
 * GET /api/products
 * Demo luxury product list
 */
router.get("/", async (req, res) => {
  try {
    const products = [
      {
        id: 1,
        name: "Luxury Pink Press-On",
        price: 1499,
        image: "https://via.placeholder.com/300",
        description: "Elegant glossy pink press-on nails."
      },
      {
        id: 2,
        name: "Royal Nude Gloss",
        price: 1799,
        image: "https://via.placeholder.com/300",
        description: "Premium nude luxury finish."
      },
      {
        id: 3,
        name: "Diamond Chrome Set",
        price: 1999,
        image: "https://via.placeholder.com/300",
        description: "Chrome shine with diamond sparkle."
      }
    ];

    res.status(200).json(products);
  } catch (error) {
    console.error("Product fetch error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;