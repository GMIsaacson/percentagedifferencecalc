import React, { useState } from "react";
import "./FractionCalculator.css";

function FractionCalculator() {
  const [wholeNumber, setWholeNumber] = useState("");
  const [numerator, setNumerator] = useState("");
  const [denominator, setDenominator] = useState("");
  const [simplifiedNumerator, setSimplifiedNumerator] = useState("");
  const [simplifiedDenominator, setSimplifiedDenominator] = useState("");
  const [calculationSteps, setCalculationSteps] = useState([]);

  const calculate = () => {
    // Parse input values as integers
    const whole = parseInt(wholeNumber, 10);
    const num = parseInt(numerator, 10);
    const den = parseInt(denominator, 10);

    // Initialize an array to store calculation steps
    const steps = [];

    // Find the greatest common divisor (GCD) using Euclidean algorithm
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // Step 1: Convert mixed fraction to an improper fraction
    const improperNum = whole * den + num;

    steps.push(`${whole} ${num}/${den} = ${improperNum}/${den}`);

    // Step 2: Simplify the improper fraction
    const greatestCommonDivisor = gcd(improperNum, den);
    const simplifiedNum = improperNum / greatestCommonDivisor;
    const simplifiedDen = den / greatestCommonDivisor;

    steps.push(`${improperNum}/${den} = ${simplifiedNum}/${simplifiedDen}`);
    steps.push(
      `${improperNum} ÷ ${greatestCommonDivisor} / ${den} ÷ ${greatestCommonDivisor}`
    );
    steps.push(`= ${simplifiedNum}/${simplifiedDen}`);
    steps.push(`${simplifiedNum / simplifiedDen}`);

    // Set the simplified result and calculation steps
    setSimplifiedNumerator(simplifiedNum);
    setSimplifiedDenominator(simplifiedDen);
    setCalculationSteps(steps);
  };

  return (
    <div className="fraction-calculator">
      <h2 className="calculator-header">Simplify Mixed Fractions Calculator</h2>
      <div className="fraction-inputs">
        <input
          type="number"
          placeholder="Whole Number"
          value={wholeNumber}
          onChange={(e) => setWholeNumber(e.target.value)}
        />
        <input
          type="number"
          placeholder="Numerator"
          value={numerator}
          onChange={(e) => setNumerator(e.target.value)}
        />
        <span>/</span>
        <input
          type="number"
          placeholder="Denominator"
          value={denominator}
          onChange={(e) => setDenominator(e.target.value)}
        />
        <button className="calculate-button" onClick={calculate}>
          Calculate
        </button>
      </div>
      <div className="result">
        <div className="result-fraction">
          <p>{simplifiedNumerator}</p>
          <p>{simplifiedDenominator}</p>
          <p>=</p>
        </div>
        <div className="result-decimal">
          <p>
            Result in decimals: {simplifiedNumerator / simplifiedDenominator}
          </p>
        </div>
        <div className="calculation-steps">
          <h3>Calculation Steps:</h3>
          <p>{calculationSteps.join(" = ")}</p>
        </div>
      </div>
    </div>
  );
}

export default FractionCalculator;
