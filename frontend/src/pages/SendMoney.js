import { useState } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SendMoney(){

 const navigate = useNavigate()

 const [amount,setAmount] = useState("")

 const handleTransfer = () => {

  let user = JSON.parse(localStorage.getItem("user"))

  if(user.balance < amount){

   alert("Insufficient balance")

   return
  }

  user.balance -= amount

  localStorage.setItem("user",JSON.stringify(user))

  alert("Money sent")

  navigate("/dashboard")

 }

 return(

  <Card style={{width:400,margin:"100px auto",padding:30,textAlign:"center"}}>

   <Typography variant="h4">
    Send Money
   </Typography>

   <br/>

   <TextField
   label="Amount"
   fullWidth
   onChange={(e)=>setAmount(Number(e.target.value))}
   />

   <br/><br/>

   <Button
   variant="contained"
   onClick={handleTransfer}
   >
   Transfer
   </Button>

  </Card>

 )

}

export default SendMoney