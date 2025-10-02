import React, { useState } from "react";
import "./App.css";

function App() {
  const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

  const [amount, setAmount] = useState("");
  const [breakdown, setBreakdown] = useState([]);

  const calculateNotes = (e) => {
    e.preventDefault();
    let amt = parseInt(amount);
    let result = [];

    if (isNaN(amt) || amt <= 0) {
      setBreakdown([{ note: "Invalid input", count: 0 }]);
      return;
    }

    denominations.forEach((note) => {
      let count = Math.floor(amt / note);
      if (count > 0) {
        result.push({ note, count });
        amt -= note * count;
      }
    });

    setBreakdown(result);
  };

  return (
    <div className="container">
      <h1>💰 Currency Note Calculator</h1>

      <form onSubmit={calculateNotes} className="form">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="btn">Calculate</button>
      </form>

      {breakdown.length > 0 && (
        <div className="result">
          <h2>🧾 Breakdown</h2>
          <ul>
            {breakdown.map((item, index) => (
              <li key={index}>
                ₹{item.note} × {item.count}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
