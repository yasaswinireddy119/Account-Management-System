import { Card, Typography } from "@mui/material";

function Statement(){

 return(

  <Card style={{width:500,margin:"100px auto",padding:30,textAlign:"center"}}>

   <Typography variant="h4">
    Account Statement
   </Typography>

   <br/>

   <Typography>
    Dummy Transaction Data
   </Typography>

   <p style={{color:"green"}}>Credit ₹500</p>
   <p style={{color:"red"}}>Debit ₹200</p>

  </Card>

 )

}

export default Statement