const mongoose = require('mongoose')

const connect = async() => {
    try{
        mongoose.set('strictQuery', false )
        const conn = await mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log(`Connected to MongoDB Database: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connect