import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="dashboard">

      <h1 className="dashboard-title">
        Account Dashboard
      </h1>

      <div className="dashboard-cards">

        <div className="card">
          <h2>Current Balance</h2>
          <p className="balance">₹ {user.balance}</p>
        </div>

        <div className="card">
          <h2>Send Money</h2>

          <button onClick={()=>navigate("/send")}>
            Send Money
          </button>
        </div>

        <div className="card">
          <h2>Account Statement</h2>

          <button onClick={()=>navigate("/statement")}>
            View Statement
          </button>
        </div>

      </div>

    </div>

  );
}

export default Dashboard;