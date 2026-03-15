import { useState } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

function Login(){

 const navigate = useNavigate()

 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

 const handleLogin = () => {

  const user = JSON.parse(localStorage.getItem("user"))

  if(user && user.email === email && user.password === password){

   navigate("/dashboard")

  }else{

   alert("Invalid credentials")

  }

 }

 return(

  <Card style={{width:400,margin:"100px auto",padding:30,textAlign:"center"}}>

   <Typography variant="h4">Login</Typography>

   <br/>

   <TextField
   label="Email"
   fullWidth
   onChange={(e)=>setEmail(e.target.value)}
   />

   <br/><br/>

   <TextField
   label="Password"
   type="password"
   fullWidth
   onChange={(e)=>setPassword(e.target.value)}
   />

   <br/><br/>

   <Button variant="contained" onClick={handleLogin}>
    Login
   </Button>

   <br/><br/>

   <Link to="/signup">Create Account</Link>

  </Card>

 )

}

export default Login