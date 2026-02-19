const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROOT ROUTE (THIS FIXES NOT FOUND)
app.get("/", (req, res) => {
  res.status(200).send("Beautify Backend Running Successfully 🚀");
});

// ✅ PRODUCTS API
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

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});