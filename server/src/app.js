const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
// routers require 
const userRouter = require('./routers/userRoute');

const app = express();


// morgan middleware 
app.use(morgan('dev'));

// express rate limit middleware 
app.use(rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: 'To many requests from this IP. Please try again later'
}));

// xss clean middleware 
app.use(xssClean());

// bodyParser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// router middleware 
app.use(userRouter)

app.get('/', (req, res) => {
    res.status(200).send({
        message: true
    })
});


// client error handling 
app.use((req, res, next) => {
    next(createError(404, 'route is not found'))
});


// server error handling
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        succes: false,
        meassage: err.message
    })
})



module.exports = app;