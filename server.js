const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConfig = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Ensure routes are correctly set
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

