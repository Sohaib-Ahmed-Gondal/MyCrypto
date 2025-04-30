module.exports = {
    output: 'standalone',  // Required for Render
    env: {
      API_URL: process.env.RENDER_EXTERNAL_URL
    }
  }