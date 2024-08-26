const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {

    // console.log('Registration request received:', req.body);
    const user = await User.create({...req.body}) 
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({message: "User Created Sucessfully" , user: {user}, token})
}

const login = async (req, res) => {
    
    const { email, password } = req.body
    // console.log(email, password)
    if(!email || !password){
        return res.status(StatusCodes.BAD_REQUEST).json({message: 'Please provide email or password'})
    }
    const user = await User.findOne({ email })
    if(!user){
        // console.log('no user')
        return res.status(StatusCodes.UNAUTHORIZED).json({message: 'No user Found'})
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        return res.status(StatusCodes.UNAUTHORIZED).json({message: 'Incorrect Email or Password'})
    }

    // compare password
    const token = user.createJWT()
    // console.log(req.headers)
    // console.log(token)
    res.status(StatusCodes.OK).json({message: "User Sucessfully Login", user: {name: user.name}, token})
}

const home = async (req, res) => {
    // console.log(req.user)
    const {UserId, name} = req.user
    res.status(StatusCodes.OK).json({name, UserId})
}

module.exports = {
    register,
    login,
    home
}