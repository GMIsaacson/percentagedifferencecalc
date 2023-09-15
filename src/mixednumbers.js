import React, { useState } from "react";
import "./FractionCalculator.css";

function MixedNumberCalculator() {
  const [wholeNumber1, setWholeNumber1] = useState("");
  const [numerator1, setNumerator1] = useState("");
  const [denominator1, setDenominator1] = useState("");
  const [wholeNumber2, setWholeNumber2] = useState("");
  const [numerator2, setNumerator2] = useState("");
  const [denominator2, setDenominator2] = useState("");
  const [resultWholeNumber, setResultWholeNumber] = useState("");
  const [resultNumerator, setResultNumerator] = useState("");
  const [resultDenominator, setResultDenominator] = useState("");
  const [operator, setOperator] = useState("+"); // Default to addition
  const [calculationSteps, setCalculationSteps] = useState([]); // Store calculation steps

  const calculate = () => {
    // Parse input values as integers
    const wholeNum1 = parseInt(wholeNumber1, 10);
    const num1 = parseInt(numerator1, 10);
    const den1 = parseInt(denominator1, 10);
    const wholeNum2 = parseInt(wholeNumber2, 10);
    const num2 = parseInt(numerator2, 10);
    const den2 = parseInt(denominator2, 10);

    // Initialize an array to store calculation steps
    const steps = [];

    // Step 1: Convert mixed numbers to improper fractions
    const improperFraction1 =
      wholeNum1 >= 0 ? wholeNum1 * den1 + num1 : wholeNum1 * den1 - num1;
    const improperFraction2 =
      wholeNum2 >= 0 ? wholeNum2 * den2 + num2 : wholeNum2 * den2 - num2;

    steps.push(
      `Step 1: Convert mixed numbers to improper fractions: (${wholeNum1} ${num1}/${den1}) and (${wholeNum2} ${num2}/${den2})`
    );

    // Step 2: Calculate the result of addition or subtraction
    let step2ResultNumerator, step2ResultDenominator;

    if (operator === "+") {
      step2ResultNumerator =
        improperFraction1 * den2 + improperFraction2 * den1;
      step2ResultDenominator = den1 * den2;
    } else if (operator === "-") {
      step2ResultNumerator =
        improperFraction1 * den2 - improperFraction2 * den1;
      step2ResultDenominator = den1 * den2;
    }

    steps.push(
      `Step 2: (${improperFraction1}/${den1}) ${operator} (${improperFraction2}/${den2}) = (${step2ResultNumerator}/${step2ResultDenominator})`
    );

    // Calculate the greatest common divisor (GCD) for simplification
    const greatestCommonDivisor = gcd(
      step2ResultNumerator,
      step2ResultDenominator
    );

    // Step 3: Simplify the result by dividing both numerator and denominator by GCD
    const simplifiedNumerator = step2ResultNumerator / greatestCommonDivisor;
    const simplifiedDenominator =
      step2ResultDenominator / greatestCommonDivisor;

    steps.push(
      `Step 3: Simplified Result = (${simplifiedNumerator}/${simplifiedDenominator})`
    );

    // Set the result and calculation steps
    setResultWholeNumber("");
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
      <h2 className="calculator-header">Mixed Numbers Calculator</h2>
      <div className="mixed-number-inputs">
        <input
          type="number"
          placeholder="Whole Number 1"
          value={wholeNumber1}
          onChange={(e) => setWholeNumber1(e.target.value)}
        />
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
        </div>
        <input
          type="number"
          placeholder="Whole Number 2"
          value={wholeNumber2}
          onChange={(e) => setWholeNumber2(e.target.value)}
        />
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
          {wholeNumber1} {numerator1}/{denominator1} {operator} {wholeNumber2}{" "}
          {numerator2}/{denominator2} ={" "}
          {resultNumerator !== "" &&
            `${
              resultWholeNumber !== "" ? resultWholeNumber + " " : ""
            }${resultNumerator}/${resultDenominator}`}
        </p>
      </div>
      <div className="calculation-steps">
        <h3 className="calculation-steps-header">Calculation Steps:</h3>
        <ol>
          {calculationSteps.map((step, index) => (
            <li key={index} className="calculation-step">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
    // ... (rest of your component code remains the same)
  );
}

export default MixedNumberCalculator;
