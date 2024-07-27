const express = require('express');
const {urlencoded} = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 5000
const connect = require('./config/database')

connect()
const app = express()

app.use(express.json());
app.use(urlencoded({extended: false}))
app.use('/users', require('./routes/routes'))

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})