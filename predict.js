const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/auto', async (req, res) => {
  try {
    const response = await axios.post(process.env.AI_ENGINE_URL, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: 'Prediction failed', error: err.message });
  }
});

module.exports = router;
