const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require('./routes/userRoutes');

const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors'); // Import the 'cors' middleware
const fs=require('fs')
const chatRoutes = require("./routes/chatRoutes");
const authRout=require('./routes/oauth')

const  requestAuth=require('./routes/requestAuth')
dotenv.config();

connectDB();
const app = express();
app.use(express.json()); // to accept JSON data

// Define a list of allowed origins for CORS. You can configure this to match your requirements.
const allowedOrigins = [
  'http://localhost:3000', // Replace with the origin of your frontend application
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
// const corsOptions = {
//   origin: true,
// };
// app.use(cors(corsOptions));
//

app.use(cors(corsOptions)); // Use the 'cors' middleware with the configured options

const PORT = process.env.PORT;

// Use the userRoutes middleware
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/requestAuth',requestAuth)
app.use('/oauth',authRout);

app.use(notFound);
app.use(errorHandler);



const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);
