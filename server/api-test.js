require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const COIN_ID = 'bitcoin'; // Try 'ethereum' or other coins
const API_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${COIN_ID}&vs_currencies=usd&x_cg_demo_api_key=${API_KEY}`;

console.log("Testing API Connection...");

axios.get(API_URL)
  .then(response => {
    console.log(`✅ Success! ${COIN_ID} price: $${response.data[COIN_ID].usd}`);
  })
  .catch(error => {
    console.error("❌ Error:", error.response?.data || error.message);
    console.log("TIP: Check if:");
    console.log("- Your API_KEY in .env is valid");
    console.log("- You're using the correct API endpoint");
    console.log("- Your API service is available");
  });
  