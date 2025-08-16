import User from"../models/user.model.js"
import uploadOnCloudinary from "../config/cloudinary.js"
import jwt from "jsonwebtoken";
// import User from "../models/User.js";
export const getcurrentUser=async (req,res)=>{
    try {
        const userId=req.userId;
        const user=await User.findById(userId).select("-password")
        if(!user)
        {
            return res.status(400).json({message:"User is not found"})
        }
        return res.status(200).json(user)

    } catch (error) {
        return res.status(400).json({message:"get error User is not found"})
    }
}




// N


export const updateAssistant=async(req,res)=>{
    try {
        const {assistantName,imageUrl}=req.body
        let assistantImage;
        if(req.file)
        {
            assistantImage=await uploadOnCloudinary(req.file.path)
        }else
        {
            assistantImage=imageUrl
        }
        const user=await User.findByIdAndUpdate(req.userId,{
            assistantName, assistantImage 
        },{new:true}).select("-password")
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({message:"Update Assistance User is not found"})
    }
}