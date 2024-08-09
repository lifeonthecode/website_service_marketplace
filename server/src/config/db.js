const { db_url } = require("../secret");
const mongoose = require('mongoose')

const connectDatabase = async (option = {}) => {
    try {

        await mongoose.connect(db_url, option);
        // if mongoose succefully connected then this message excute 
        mongoose.connection.on('open', () => {
            console.log('Database connected')
        });

        // if mongoose is not connected then this message excute
        mongoose.connect.on('error', (error) => {
            console.error('Database some error: ', this.toString(error))
        });
        
    } catch (error) {
        console.error('Database is not connected: ', this.toString(error))
    }
}

module.exports = connectDatabase;
