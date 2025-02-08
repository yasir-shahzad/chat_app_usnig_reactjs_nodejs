import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {generateToken} from '../lib/utils.js'

export const singup = async (req,res)=>{
    const {fullName, email,password}= req.body ; 
    try{
        if(!fullName || !email || !password){
            return res.status(400).json({message: "All the fields are required "})
        }
        if(password.length < 6) {
            return res.status(400).json({message: "Password must be at least 6 caracateres "})
        }
        const user = await User.findOne({email})
        if (user) return res.status(400).json({message: 'email is already existe'})
        
        const salt  = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName: fullName,
            email: email, 
            password : hashedPassword ,
        });
        if(newUser) {
            generateToken(newUser._id,res)    
            await newUser.save();
            return res.status(200).json({message: "The user was created successfully. "})
        }
    }
    catch(error){
        console.log('error happen ' , error)
    }
}

export const login = (req,res)=>{
    res.send('this a login from the controller ')
}

export const logout = (req,res)=>{
    res.send('this a logout from the controller ')
}