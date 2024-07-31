import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connection.js'
import userRoutes from './routes/routes.js'
const PORT = process.env.PORT || 5000
import bodyParser from 'body-Parser'

dotenv.config()
connectDB()
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/user', userRoutes)

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something went wrong!')
})

app.listen(PORT, () =>{
    console.log(`Server is running at port ${PORT}`);
})