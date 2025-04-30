const axios = require('axios');
const CACHE_TTL = 30000; // 30 seconds

let lastFetch = 0;
let cachedPrices = {};

module.exports = {
  getPrices: async (coinIds) => {
    if (Date.now() - lastFetch < CACHE_TTL) return cachedPrices;
    
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd`
    );
    cachedPrices = response.data;
    lastFetch = Date.now();
    return cachedPrices;
  }
};