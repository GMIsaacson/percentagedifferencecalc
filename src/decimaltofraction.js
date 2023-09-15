import React, { useState } from "react";
import "./FractionCalculator.css";

function DecimalToFractionCalculator() {
  const [decimalValue, setDecimalValue] = useState("");
  const [resultNumerator, setResultNumerator] = useState("");
  const [resultDenominator, setResultDenominator] = useState("");
  const [calculationSteps, setCalculationSteps] = useState([]);

  const calculate = () => {
    const decimal = parseFloat(decimalValue);
    if (isNaN(decimal)) {
      return;
    }

    // Initialize an array to store calculation steps
    const steps = [];

    // Find the maximum denominator (maximum precision)
    let maxDenominator = 1;
    for (let i = 1; i <= 1000; i++) {
      if (
        Math.abs(decimal - Math.round(decimal * i) / i) <
        Math.abs(
          decimal - Math.round(decimal * maxDenominator) / maxDenominator
        )
      ) {
        maxDenominator = i;
      }
    }

    // Calculate the numerator based on the rounded decimal and maxDenominator
    const numerator = Math.round(decimal * maxDenominator);

    steps.push(`Step 1: Find the maximum denominator with precision`);
    steps.push(`Step 2: Calculate the numerator as ${numerator}`);
    steps.push(`Step 3: Calculate the denominator as ${maxDenominator}`);

    // Set the result and calculation steps
    setResultNumerator(numerator);
    setResultDenominator(maxDenominator);
    setCalculationSteps(steps);
  };

  return (
    <div className="fraction-calculator">
      <h2 className="calculator-header">Decimal to Fraction Calculator</h2>
      <div className="fraction-inputs">
        <input
          type="number"
          step="any"
          placeholder="Decimal Value"
          value={decimalValue}
          onChange={(e) => setDecimalValue(e.target.value)}
        />
        <button className="calculate-button" onClick={calculate}>
          Calculate
        </button>
      </div>
      <div className="result">
        <p className="calculation-result">
          Decimal Value: {decimalValue} = {resultNumerator}/{resultDenominator}
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

export default DecimalToFractionCalculator;
