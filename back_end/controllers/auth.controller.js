import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {generateToken} from '../lib/utils.js';
import cloudinary from '../lib/cloudinary.js'; 

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
        res.status(500).json({ message: "Internal Server Error" });

    }
}

export const login = async (req,res)=>{
    const {email,password} = req.body
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "invalid credentials"})
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message: "invalid credentials"})
        }
        generateToken(user._id,res)    
        return res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilPic: user.profilPic
        }) 

    }
    catch(error){
        console.log(error.message)
        res.status(500).json({ message: "Internal Server Error" });

    }
}

export const logout = (req,res)=>{
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
      } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
      }
}

export const updateProfile = async (req,res)=>{
    try{
        const {profilPic} = req.body;
        const userId =  req.user._id;
        if(!profilPic){
             return res.status(400).json({
                message:"the profile pic is required ! "
             })
        }
       const uploadResponse =  await cloudinary.uploader.upload(profilPic)
       const updatedUser = await User.findByIdAndUpdate(userId, { profilePic: uploadResponse.secure_url }, { new: true } );
        res.status(200).json(updatedUser)
    }
    catch(error){
        console.log("Error in update profile  controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const checkAuth = async (req,res)=>{
    try{
        res.status(200).json(req.user)
    }
    catch(error){
        console.log("Error", error.message);
        res.status(500).json({ message: "Internal Server Error" }); 
    }
}