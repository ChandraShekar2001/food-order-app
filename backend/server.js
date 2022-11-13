const express = require('express')
const app = require('./app')
const connectDatabase = require('./config/database')

connectDatabase()

const port = 8000;

const server = app.listen(port, () => console.log(`Server connected at port ${port}`))

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });
  

