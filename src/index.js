// activate dotenv
require('dotenv').config();
// {path: __dirname + '/.env'};

// enable connection
require("./app/Config/database").connect();

// import modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
let routes = require("./app/routes/routes");

// defining the Express app
const app = express();

// set port 
const port = process.env.PORT || 4000;

// enabling CORS for all requests
app.use(cors());

// enabling helmet for additional layer of security
app.use(helmet());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all controllers
// routes(app);

// starting the server
app.listen(port, () => {
    console.log(`listening on port ${port} `);
});


// Mongoose: Mongoose is a Node.js package that provides a way to interact with MongoDB databases. It simplifies database operations by providing a simple, schema-based solution to model application data.

// dotenv: Dotenv is a zero-dependency package that loads environment variables from a .env file into process.env. This is useful for keeping sensitive configuration data like API keys, database credentials, and other environment-specific settings separate from your codebase.

// Express: Express is a popular Node.js framework for building web applications and APIs. It provides an easy-to-use HTTP server that can handle requests, responses, and routing.

// CORS: CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that prevents web pages from making requests to a different domain. The CORS package provides middleware to enable cross-origin requests in your API.

// jsonwebtoken: JSON Web Tokens (JWT) are a way to securely transmit information between parties as a JSON object. JWTs are often used for authentication and authorization in web applications. The jsonwebtoken package provides a way to encode and decode JWTs in your Node.js API.

// morgan: Morgan is a logging middleware for Express that provides detailed HTTP request logging. It logs incoming requests to your API, including the method, URL, status, and response time.

// nodemon: Nodemon is a development tool that automatically restarts your Node.js application when changes are detected. This saves you the time and effort of manually restarting your application after every change during development.

// helmet package is a security middleware for Node.js web applications. It provides an additional layer of security by setting various HTTP headers that help protect your application from common web vulnerabilities.

// Using these packages together can simplify the development of your Node.js API and provide a secure and robust framework.