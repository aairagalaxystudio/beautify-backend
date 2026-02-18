const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Beautify by Mansi Backend Live");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
