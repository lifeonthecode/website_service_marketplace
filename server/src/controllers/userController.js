const createError = require('http-errors');
const userController = (req, res, next) => {
    try {
        res.status(200).send({
            success: true,
            meassage: 'user is success'
        })
    } catch (error) {
        next(error)
    }

};

module.exports = userController