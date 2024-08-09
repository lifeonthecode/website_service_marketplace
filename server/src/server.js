// app 
const app = require("./app");
// connectDatabase 
const connectDatabase = require("./config/db");
// server port 
const { serverPort } = require("./secret");



// server lestening 
app.listen(serverPort, async () => {
    console.log(`server is running port: http://localhost:${serverPort}`);
    await connectDatabase();
})