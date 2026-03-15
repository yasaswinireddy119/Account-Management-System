import { useState } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signup() {

 const navigate = useNavigate();

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const handleSignup = () => {

  const user = {
   name,
   email,
   password,
   balance:10000
  };

  localStorage.setItem("user",JSON.stringify(user));

  alert("Account Created with ₹10,000");

  navigate("/");
 };

 return(

  <Card style={{width:400,margin:"100px auto",padding:30,textAlign:"center"}}>

   <Typography variant="h4">Signup</Typography>

   <br/>

   <TextField
   label="Name"
   fullWidth
   onChange={(e)=>setName(e.target.value)}
   />

   <br/><br/>

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

   <Button variant="contained" onClick={handleSignup}>
    Create Account
   </Button>

  </Card>

 )

}

export default Signup