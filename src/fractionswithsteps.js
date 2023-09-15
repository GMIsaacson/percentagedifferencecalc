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
  const [calculationSteps, setCalculationSteps] = useState([]); // Store calculation steps

  const calculate = () => {
    // Parse input values as integers
    const num1 = parseInt(numerator1, 10);
    const den1 = parseInt(denominator1, 10);
    const num2 = parseInt(numerator2, 10);
    const den2 = parseInt(denominator2, 10);

    // Initialize an array to store calculation steps
    const steps = [];

    // Step 1: Multiply numerator1 by denominator2 and numerator2 by denominator1
    const step1ResultNumerator = num1 * den2;
    const step1ResultDenominator = den1 * den2;
    steps.push(
      `Step 1: (${num1}/${den1}) * (${num2}/${den2}) = (${step1ResultNumerator}/${step1ResultDenominator})`
    );

    // Step 2: Multiply numerator2 by denominator1
    const step2ResultNumerator = num2 * den1;
    steps.push(
      `Step 2: (${num2}/${den2}) * (${num1}/${den1}) = (${step2ResultNumerator}/${step1ResultDenominator})`
    );

    // Step 3: Add or subtract the results of Step 1 and Step 2 based on the operator
    let step3ResultNumerator, step3ResultDenominator;
    if (operator === "+") {
      step3ResultNumerator = step1ResultNumerator + step2ResultNumerator;
    } else if (operator === "-") {
      step3ResultNumerator = step1ResultNumerator - step2ResultNumerator;
    }
    step3ResultDenominator = step1ResultDenominator;

    steps.push(
      `Step 3: (${step1ResultNumerator}/${step1ResultDenominator}) ${operator} (${step2ResultNumerator}/${step1ResultDenominator}) = (${step3ResultNumerator}/${step3ResultDenominator})`
    );

    // Calculate the greatest common divisor (GCD) for simplification
    const greatestCommonDivisor = gcd(
      step3ResultNumerator,
      step3ResultDenominator
    );

    // Step 4: Simplify the result by dividing both numerator and denominator by GCD
    const simplifiedNumerator = step3ResultNumerator / greatestCommonDivisor;
    const simplifiedDenominator =
      step3ResultDenominator / greatestCommonDivisor;

    steps.push(
      `Step 4: Simplified Result = (${simplifiedNumerator}/${simplifiedDenominator})`
    );

    // Set the result and calculation steps
    setResultNumerator(simplifiedNumerator);
    setResultDenominator(simplifiedDenominator);
    setCalculationSteps(steps);
  };

  // Function to calculate the greatest common divisor (GCD) using Euclidean algorithm
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  return (
    <div className="fraction-calculator">
      <h2 className="calculator-header">Fraction Calculator</h2>
      <div className="fraction-inputs">
        {/* Input fields (unchanged) */}
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
        {/* ... */}
      </div>
      <div className="result">
        <p className="calculation-result">
          {numerator1}/{denominator1} {operator} {numerator2}/{denominator2} ={" "}
          {resultNumerator !== "" && `${resultNumerator}/${resultDenominator}`}
        </p>
      </div>
      <div className="calculation-steps">
        <h3>Calculation Steps:</h3>
        <ol>
          {calculationSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default FractionCalculator;
