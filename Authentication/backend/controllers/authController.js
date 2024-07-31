const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const login = async(req,res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});

    if(!user){
        return res.status(400).send('Invalid username or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(passwordMatch){
        const accessToken = jwt.sign({username: user.username, role: user.role}, process.env.ACCESS_TOKEN_SECRET);

        if(user.role === 'Admin'){
            return res.json({message: 'Welcome Admin', accessToken})
        }else{
            return res.json({message: 'Welcome User', accessToken})
        }
    }else{
        return res.status(400).send('Invalid Username or Password')
    }
}

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token) return res.status(401).send('Access Denied');

    try{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    }catch(error) {
        return res.status(403).send('Invalid token');
    }
}

const registerUser = async(req, res) => {
    try {
        const {username, password, email} = req.body;
        
        if(!username || !password || !email){
            return res.status(400).json({error: 'Username and password are required'})
        }
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).json({error: 'Username already exists'})
        }

        const hashedPasword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            password: hashedPasword,
            email,
            role: 'User'
        });
        await newUser.save();

        res.status(201).json({message: 'User registered successfully'})
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({error: 'Internal server error'})
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users
        res.status(200).json(users);     // Send users as JSON response
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const editUser = async(req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const user = await User.findById(req.params.id);
    
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        user.name = username;
        user.email = email;
        user.password = password;
        user.role = role;
    
        const updatedUser = await user.save();
        res.json(updatedUser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

module.exports = {
    login, verifyToken, registerUser, getAllUsers, editUser,
}