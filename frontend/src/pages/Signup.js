import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = () => {

    const user = {
      email,
      password,
      balance:10000
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully");

    navigate("/");
  };

  return(

    <div style={{
      width:"350px",
      margin:"100px auto",
      padding:"30px",
      border:"1px solid #ddd",
      borderRadius:"10px",
      textAlign:"center"
    }}>

      <h2>Signup</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
        style={{width:"100%",padding:"10px",margin:"10px"}}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
        style={{width:"100%",padding:"10px",margin:"10px"}}
      />

      <button onClick={handleSignup}>
        Create Account
      </button>

    </div>
  )
}

export default Signup