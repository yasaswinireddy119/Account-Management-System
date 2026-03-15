import "./statement.css";

function Statement(){

  const transactions = [
    {
      date:"10 Mar 2026",
      type:"Credit",
      amount:500,
      from:"Ravi",
      to:"You"
    },
    {
      date:"11 Mar 2026",
      type:"Debit",
      amount:200,
      from:"You",
      to:"Arjun"
    },
    {
      date:"12 Mar 2026",
      type:"Credit",
      amount:1000,
      from:"Rahul",
      to:"You"
    },
    {
      date:"13 Mar 2026",
      type:"Debit",
      amount:300,
      from:"You",
      to:"Ajay"
    }
  ];

  return(

    <div className="statement-container">

      <h1>Account Statement</h1>

      <table>

        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>

        <tbody>

          {transactions.map((t,index)=>(
            <tr key={index}>

              <td>{t.date}</td>

              <td
                style={{
                  color: t.type === "Credit" ? "green" : "red",
                  fontWeight:"bold"
                }}
              >
                {t.type}
              </td>

              <td>₹ {t.amount}</td>

              <td>{t.from}</td>

              <td>{t.to}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Statement;