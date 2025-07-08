require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const predictRoutes = require('./routes/predict');
const paymentRoutes = require('./routes/payment');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('👑 PrediKing Backend Running!');
});

app.use('/api/auth', authRoutes);
app.use('/api/predict', predictRoutes);
app.use('/api/payment', paymentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
