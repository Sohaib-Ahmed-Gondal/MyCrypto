const express = require('express');
const axios = require('axios');
const router = express.Router();

// Get BTC Price (CoinGecko)
router.get('/btc-price', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    res.json({ price: response.data.bitcoin.usd });
  } catch (err) {
    res.status(500).json({ error: 'API error' });
  }
});

module.exports = router;