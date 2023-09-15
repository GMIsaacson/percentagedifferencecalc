import React, { useState } from "react";
import "./percentage.css";

const Phrasepercentage = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const calculatePercentage = (phrase) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    let calculatedResult;
    if (phrase === "percentageOfInput1") {
      calculatedResult = (num1 / 100) * num2;
      setResult(
        `What is ${input1}% of ${input2}? Answer: ${calculatedResult.toFixed(
          2
        )}`
      );
    } else if (phrase === "input1PercentageOf") {
      calculatedResult = (num1 / num2) * 100;
      setResult(
        `${input1} is what percentage of ${input2}? Answer: ${calculatedResult.toFixed(
          2
        )}%`
      );
    } else if (phrase === "input1OfPercentageOf") {
      calculatedResult = (num1 / num2) * 100;
      setResult(
        `${input1} is ${calculatedResult.toFixed(
          2
        )}% of what? Answer: ${input2}`
      );
    }
  };

  const clearFields = () => {
    setInput1("");
    setInput2("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Percentage Calculator in Common Phrases</h1>
        <div className="input-group">
          <label className="label">Enter Percentage:</label>
          <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Enter a number"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Enter Total Value:</label>
          <input
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Enter a number"
            className="input"
          />
        </div>
        <button
          onClick={() => calculatePercentage("percentageOfInput1")}
          className="calculate-button"
        >
          Calculate: What is x% of y?
        </button>
        <button
          onClick={() => calculatePercentage("input1PercentageOf")}
          className="calculate-button"
        >
          Calculate: x is what % of y?
        </button>
        <button
          onClick={() => calculatePercentage("input1OfPercentageOf")}
          className="calculate-button"
        >
          Calculate: x% of what is y?
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">Result: {result}</div>
      </div>
    </div>
  );
};

export default Phrasepercentage;
