```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./src/routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
}));
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Beautify by Mansi API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
