import bcrypt from "bcryptjs"
import supabase from "../config/supabaseClient.js"
import { generateToken } from "../utils/generateToken.js"

export const signup = async(req,res)=>{

 const {name,email,password} = req.body

 const hashedPassword = await bcrypt.hash(password,10)

 const {data,error} = await supabase
  .from("users")
  .insert([{name,email,password:hashedPassword}])
  .select()
  .single()

 if(error){
  return res.status(400).json({error:error.message})
 }

 const token = generateToken(data)

 res.json({user:data,token})
}

//For the Login Functionality
export const login = async(req,res)=>{

 const {email,password} = req.body

 const {data:user} = await supabase
  .from("users")
  .select("*")
  .eq("email",email)
  .single()

 if(!user){
  return res.status(400).json({message:"User not found"})
 }

 const match = await bcrypt.compare(password,user.password)

 if(!match){
  return res.status(400).json({message:"Wrong password"})
 }

 const token = generateToken(user)

 res.json({user,token})
}

//Balance API


export const getBalance = async(req,res)=>{

 const {data} = await supabase
  .from("users")
  .select("balance")
  .eq("id",req.user.id)
  .single()

 res.json(data)

}