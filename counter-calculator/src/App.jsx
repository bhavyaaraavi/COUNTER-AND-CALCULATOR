
import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  function calculate(op) {
    let a = Number(num1);
    let b = Number(num2);

    if (num1 === "" || num2 === "") {
      setResult("Enter both numbers");
      return;
    }

    if (op === "+")
      setResult(a + b);
    else if (op === "-")
      setResult(a - b);
    else if (op === "*")
      setResult(a * b);
    else if (op === "/")
      setResult(b === 0 ? "Cannot divide by zero" : a / b);
  }

  return (
    <div className="container">

      <h1>Counter and Calculator</h1>
      <p>fed endsem lab</p>

      <div className="box">
        <h2>Counter</h2>

        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div className="box">
        <h2>Calculator</h2>

        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />

        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>

        <h3>Result: {result}</h3>
      </div>

    </div>
  );
}

export default App;
