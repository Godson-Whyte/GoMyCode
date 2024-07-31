import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export const login = async(req, res) =>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) return res.status(400).send('Invalid username or password');

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.status(400).send('Incorrect password');

        const token = jwt.sign({userId: user._id, username: user.name}, process.env.SECRETKEY);
        res.header('Authorization', `Bearer ${token}`).send({token, user});
    }catch (err) {
        console.error(err);
        res.status(500).send(`Server Error`)
    }
}

export const registerUser = async(req, res) =>{
    try{
        const {name, phone, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            phone,
            password: hashedPassword
        })
        await user.save();
        res.status(201).json(user)
    }catch (err) {
        console.error(err);
        res.status(500).send(`Server Error`)
    }
}