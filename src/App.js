import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setInput("");
    } else if (value === "DE") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // Evaluate the expression (use with caution)
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        {["AC", "DE", "/", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "00", "0"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} className={btn === "00" ? "btn zero-btn" : "btn"}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
