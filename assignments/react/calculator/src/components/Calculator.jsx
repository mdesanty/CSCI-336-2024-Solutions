import { useState } from "react";

function Calculator() {
  const [numberA, setNumberA] = useState("");
  const [numberB, setNumberB] = useState("");
  const [result, setResult] = useState("n/a");
  const [resultClass, setResultClass] = useState("");

  function handleAdd() {
    if (numberA.length === 0 || numberB.length === 0) {
      setResultClass("error-message");
      setResult("Both a and b are required.");
      return;
    }

    const a = parseFloat(numberA);
    const b = parseFloat(numberB);

    if (isNaN(a) || isNaN(b)) {
      setResultClass("error-message");
      setResult("Both a and b must be numbers.");
    }
    else {
      setResultClass("");
      setResult(a + b);
    }
  }

  function handleSubtract() {
    if (numberA.length === 0 || numberB.length === 0) {
      setResultClass("error-message");
      setResult("Both a and b are required.");
      return;
    }

    const a = parseFloat(numberA);
    const b = parseFloat(numberB);

    if (isNaN(a) || isNaN(b)) {
      setResultClass("error-message");
      setResult("Both a and b must be numbers.");
    }
    else {
      setResultClass("");
      setResult(a - b);
    }
  }

  function handleReset() {
    setResultClass("");
    setNumberA("");
    setNumberB("");
    setResult("n/a");
  }

  return (
    <div id="calculator-container">
      <div id="calculator">
        <div className="input-container">
          <label>Number a</label>
          <input type="number" value={numberA} onChange={(e) => setNumberA(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Number b</label>
          <input type="number" value={numberB} onChange={(e) => setNumberB(e.target.value)} />
        </div>
        <div id="buttons">
          <button id="add-button" onClick={handleAdd}>Add</button>
          <button id="subtract-button" onClick={handleSubtract}>Subtract</button>
          <button id="reset-button" onClick={handleReset}>Reset</button>
        </div>
        <div id="result-container">
          <label>Result:</label>
          <span id="result-value" className={resultClass}>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Calculator;