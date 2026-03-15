import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if(user && user.email === email && user.password === password){
      navigate("/dashboard");
    }else{
      alert("Invalid credentials");
    }

  }

  const handleReset = () =>{
    setEmail("");
    setPassword("");
  }

  return (

    <div className="container">

      <div className="left">

        <h1 className="title">🏦 WELCOME TO THE ACCOUNT MANAGEMENT SYSTEM</h1>

        <div className="login-box">

          <h2>LOGIN</h2>

          <label>Account Email</label>
          <input
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <div className="buttons">

            <button className="login-btn" onClick={handleLogin}>
              LOGIN
            </button>

            <button
              className="signup-btn"
              onClick={()=>navigate("/signup")}
            >
              SIGNUP
            </button>

          </div>

          

        </div>

      </div>

      <div className="right">

        <img
          src="https://cdn.corporatefinanceinstitute.com/assets/accounting.jpeg"
          alt="bank"
        />

      </div>

    </div>

  )

}

export default Login;