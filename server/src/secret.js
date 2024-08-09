require('dotenv').config();

// server port number 
const serverPort = process.env.SERVER_PORT;

// data base url 
const db_url = process.env.DB_URL.replace('<username>', process.env.DB_USER_NAME).replace('<password>', process.env.DB_PASS);


module.exports = {serverPort, db_url}

// WEB_SERVICES
// CVtlUiFcn8lD9tAD