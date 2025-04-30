const express = require('express');
<<<<<<< HEAD
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/routes'); // Import all routes

dotenv.config(); // Load .env file

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API Routes
app.use('/api', routes);

// ✅ Basic Route
app.get('/', (req, res) => {
  res.send('🌐 Personal Portfolio CMS API is running...');
});

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// ✅ 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

// ✅ Global Error Handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
=======
const connectDb = require('./configs/db.config');

const app = express();

connectDb();

// Basic route
app.get('/', (req, res) => {
    res.send('MyFolioHub');
});

module.exports = app;

>>>>>>> 44b3c2704f49c774161f8bdc169c59ecf02734fc
