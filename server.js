const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Beautify by Mansi Backend Running");
});

// PRODUCTS ROUTE
app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Royal Nude Press-On",
      price: 1499,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      name: "French Luxe Tips",
      price: 1799,
      image: "https://via.placeholder.com/300"
    }
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});