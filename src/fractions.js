import React, { useState } from "react";
import "./FractionCalculator.css";

function FractionCalculator() {
  const [numerator1, setNumerator1] = useState("");
  const [denominator1, setDenominator1] = useState("");
  const [numerator2, setNumerator2] = useState("");
  const [denominator2, setDenominator2] = useState("");
  const [resultNumerator, setResultNumerator] = useState("");
  const [resultDenominator, setResultDenominator] = useState("");
  const [operator, setOperator] = useState("+"); // Default to addition

  const calculate = () => {
    // Parse input values as integers
    const num1 = parseInt(numerator1, 10);
    const den1 = parseInt(denominator1, 10);
    const num2 = parseInt(numerator2, 10);
    const den2 = parseInt(denominator2, 10);

    let newNumerator, newDenominator;
    if (operator === "+") {
      // Addition
      newNumerator = num1 * den2 + num2 * den1;
      newDenominator = den1 * den2;
    } else if (operator === "-") {
      // Subtraction
      newNumerator = num1 * den2 - num2 * den1;
      newDenominator = den1 * den2;
    } else if (operator === "*") {
      // Multiplication
      newNumerator = num1 * num2;
      newDenominator = den1 * den2;
    } else if (operator === "/") {
      // Division
      newNumerator = num1 * den2;
      newDenominator = num2 * den1;
    }

    // Calculate the greatest common divisor (GCD) to simplify the result
    const gcdResult = gcd(newNumerator, newDenominator);

    // Simplify the result by dividing both numerator and denominator by GCD
    setResultNumerator(newNumerator / gcdResult);
    setResultDenominator(newDenominator / gcdResult);
  };

  // Function to calculate the greatest common divisor (GCD) using Euclidean algorithm
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  return (
    <div className="fraction-calculator">
      <h2 className="calculator-header">Fraction Calculator</h2>
      <div className="fraction-inputs">
        <input
          type="number"
          placeholder="Numerator 1"
          value={numerator1}
          onChange={(e) => setNumerator1(e.target.value)}
        />
        <span>/</span>
        <input
          type="number"
          placeholder="Denominator 1"
          value={denominator1}
          onChange={(e) => setDenominator1(e.target.value)}
        />
        <div className="operator-radio">
          <label>
            <input
              type="radio"
              value="+"
              checked={operator === "+"}
              onChange={() => setOperator("+")}
            />
            Addition
          </label>
          <label>
            <input
              type="radio"
              value="-"
              checked={operator === "-"}
              onChange={() => setOperator("-")}
            />
            Subtraction
          </label>
          <label>
            <input
              type="radio"
              value="*"
              checked={operator === "*"}
              onChange={() => setOperator("*")}
            />
            Multiplication
          </label>
          <label>
            <input
              type="radio"
              value="/"
              checked={operator === "/"}
              onChange={() => setOperator("/")}
            />
            Division
          </label>
        </div>
        <input
          type="number"
          placeholder="Numerator 2"
          value={numerator2}
          onChange={(e) => setNumerator2(e.target.value)}
        />
        <span>/</span>
        <input
          type="number"
          placeholder="Denominator 2"
          value={denominator2}
          onChange={(e) => setDenominator2(e.target.value)}
        />
        <button className="calculate-button" onClick={calculate}>
          Calculate
        </button>
      </div>
      <div className="result">
        <p className="calculation-result">
          {numerator1}/{denominator1} {operator} {numerator2}/{denominator2} ={" "}
          {resultNumerator !== "" && `${resultNumerator}/${resultDenominator}`}
        </p>
      </div>
    </div>
  );
}

export default FractionCalculator;
