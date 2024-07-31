import mongoose from 'mongoose'


const connectDB = async() => {
    try{
        mongoose.set('strictQuery', false)
        const connection = await mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log(`MongoDB Connected to ${connection.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

export default connectDB