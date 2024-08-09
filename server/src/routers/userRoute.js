const express = require("express");
const userController = require("../controllers/userController");
// express router 
const userRouter = express.Router();


userRouter.get('/api/v1/users', userController)
module.exports = userRouter;