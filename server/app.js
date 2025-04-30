const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const tradeRoutes = require('./routes/trade');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/crypto-app', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trade', tradeRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// added dotenv to load environment variables
require('dotenv').config({ path: './.env' }); // Top of file
console.log('DB connected to:', process.env.DATABASE_URL?.split('@')[1] || 'Not loaded!');