require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

/* ========================
   MIDDLEWARE
======================== */
app.use(cors());
app.use(express.json());

/* ========================
   ROUTES
======================== */
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);

/* ========================
   ROOT TEST
======================== */
app.get("/", (req, res) => {
  res.send("Beautify by Mansi Backend Running 🚀");
});

/* ========================
   SERVER START
======================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});