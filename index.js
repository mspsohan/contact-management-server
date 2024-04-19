const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');
const contactRoutes = require('./src/routes/contactRoutes')

dotenv.config();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
   origin: ["http://localhost:5173"],
   optionsSuccessStatus: 200,
}));

// Api Routes
app.use('/api/contacts', contactRoutes);

// Api Status
app.get("/", (req, res) => {
   res.send("API is running");
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
   console.log(`Server running on PORT ${PORT}`);
});
