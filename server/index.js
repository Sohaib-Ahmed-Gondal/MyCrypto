require('dotenv').config();
const axios = require('axios');

const API_KEY = process.env.API_KEY;
const API_URL = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&x_cg_demo_api_key=${API_KEY}`;

axios.get(API_URL)
  .then(response => console.log("Bitcoin Price: $", response.data.bitcoin.usd))
  .catch(error => console.error("Error:", error.message));