const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
   try {
      const mongoURI = process.env.MONGODB_URI;
      const dbName = process.env.DB_NAME;

      const conn = await mongoose.connect(mongoURI, { dbName });

      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
   }
};

module.exports = connectDB;
