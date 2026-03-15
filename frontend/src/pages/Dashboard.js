import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard(){

 const navigate = useNavigate()

 const user = JSON.parse(localStorage.getItem("user"))

 return(

  <Card style={{width:500,margin:"100px auto",padding:30,textAlign:"center"}}>

   <Typography variant="h4">
    Welcome {user.name}
   </Typography>

   <br/>

   <Typography variant="h5">
    Balance: ₹{user.balance}
   </Typography>

   <br/><br/>

   <Button
   variant="contained"
   onClick={()=>navigate("/send")}
   >
   Send Money
   </Button>

   <br/><br/>

   <Button
   variant="outlined"
   onClick={()=>navigate("/statement")}
   >
   Account Statement
   </Button>

  </Card>

 )

}

export default Dashboard