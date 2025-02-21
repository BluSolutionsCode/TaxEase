require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes'); // Import User Authentication Routes
const pool = require('./models/userModel'); // PostgreSQL Database Connection

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Test Route (Home)
app.get('/', (req, res) => {
    res.send('🚀 TaxEase Pro Backend is Running...');
});

// ✅ User Authentication Routes
app.use('/api/users', userRoutes);

// ✅ Check Database Connection
pool.connect()
    .then(() => console.log('✅ Database Connected Successfully'))
    .catch(err => console.error('❌ Database Connection Error:', err));

// ✅ Start Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

