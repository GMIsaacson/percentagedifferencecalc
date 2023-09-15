import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [angleMode, setAngleMode] = useState("deg"); // Initialize with 'deg'
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle numeric button clicks
  const handleNumericClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle decimal point button click
  const handleDecimalClick = () => {
    // Check if the input already contains a decimal point
    if (!input.includes(".")) {
      setInput((prevInput) => prevInput + ".");
    }
  };

  // Function to handle operator button clicks
  const handleOperatorClick = (operator) => {
    // Replace ÷ with / before appending it to the input
    if (operator === "÷") {
      operator = "/";
    }
    setInput((prevInput) => prevInput + operator);
  };

  const handleClear = () => {
    setInput("");
  };
  const handleOpenParenthesis = () => {
    setInput((prevInput) => prevInput + "(");
  };
  const handleCloseParenthesis = () => {
    setInput((prevInput) => prevInput + ")");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const handleAngleModeChange = (mode) => {
    setAngleMode(mode);
  };

  const evaluateExpression = (expression) => {
    try {
      // Replace trigonometric function names with actual calculations
      expression = expression.replace(/sin\(/g, "Math.sin(");

      // Evaluate the expression
      const result = eval(expression);

      return result;
    } catch (error) {
      return "Error";
    }
  };

  // Function to handle trigonometric function button clicks
  const handleTrigonometricClick = (funcName) => {
    if (input === "Error") {
      // If there's an error, clear the input
      setInput("");
    }

    // Check if the input ends with a number, decimal point, or closing parenthesis
    const lastChar = input.slice(-1);
    if (!isNaN(lastChar) || lastChar === "." || lastChar === ")") {
      // If the last character is a number, decimal point, or closing parenthesis,
      // add a multiplication operator (*) before appending the trigonometric function
      setInput((prevInput) => prevInput + "*" + funcName + "(");
    } else {
      // Otherwise, directly append the trigonometric function
      setInput((prevInput) => prevInput + funcName + "(");
    }
  };

  // Function to handle the equals button click
  const handleEqualsClick = () => {
    // Get the current input expression
    const expression = input;

    // Evaluate the expression
    const result = evaluateExpression(expression);

    // Update the input state with the result
    setInput(result.toString());
  };

  return (
    <div className="calculator">
      <div className="calculator-screen">
        <input type="text" value={input} readOnly />
      </div>
      <div className="calculator-grid">
        {/* Row 1 */}
        <button onClick={() => handleTrigonometricClick("sin")}>sin</button>
        <button onClick={() => handleTrigonometricClick("cos")}>cos</button>
        <button onClick={() => handleTrigonometricClick("tan")}>tan</button>

        <label>
          <input
            type="radio"
            value="deg"
            checked={angleMode === "deg"}
            onChange={() => handleAngleModeChange("deg")}
          />
          Deg
        </label>
        <label>
          <input
            type="radio"
            value="rad"
            checked={angleMode === "rad"}
            onChange={() => handleAngleModeChange("rad")}
          />
          Rad
        </label>

        {/* Row 2 */}
        <button onClick={() => handleButtonClick("sin⁻¹")}>sin⁻¹</button>
        <button onClick={() => handleButtonClick("cos⁻¹")}>cos⁻¹</button>
        <button onClick={() => handleButtonClick("tan⁻¹")}>tan⁻¹</button>
        <button onClick={() => handleButtonClick("π")}>π</button>
        <button onClick={() => handleButtonClick("e")}>e</button>

        {/* Row 3 */}
        <button onClick={() => handleButtonClick("x^y")}>x^y</button>
        <button onClick={() => handleButtonClick("x³")}>x³</button>
        <button onClick={() => handleButtonClick("x²")}>x²</button>
        <button onClick={() => handleButtonClick("e^x")}>e^x</button>
        <button onClick={() => handleButtonClick("10^x")}>10^x</button>

        {/* More rows and buttons */}
        <button onClick={() => handleButtonClick("y√x")}>y√x</button>
        <button onClick={() => handleButtonClick("3√x")}>3√x</button>
        <button onClick={() => handleButtonClick("√x")}>√x</button>
        <button onClick={() => handleButtonClick("ln")}>ln</button>
        <button onClick={() => handleButtonClick("log")}>log</button>
        <button onClick={handleOpenParenthesis}>(</button>

        <button onClick={handleCloseParenthesis}>)</button>
        <button onClick={() => handleButtonClick("1/x")}>1/x</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleButtonClick("n!")}>n!</button>

        <button onClick={() => handleNumericClick("7")}>7</button>
        <button onClick={() => handleNumericClick("8")}>8</button>
        <button onClick={() => handleNumericClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleButtonClick("Back")}>Back</button>
        <button onClick={() => handleNumericClick("4")}>4</button>
        <button onClick={() => handleNumericClick("5")}>5</button>
        <button onClick={() => handleNumericClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleButtonClick("Ans")}>Ans</button>
        <button onClick={() => handleNumericClick("1")}>1</button>
        <button onClick={() => handleNumericClick("2")}>2</button>
        <button onClick={() => handleNumericClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("*")}>×</button>
        <button onClick={() => handleButtonClick("M+")}>M+</button>
        <button onClick={() => handleNumericClick("0")}>0</button>
        <button onClick={() => handleDecimalClick(".")}>.</button>
        <button onClick={() => handleButtonClick("EXP")}>EXP</button>
        <button onClick={() => handleOperatorClick("÷")}>÷</button>
        <button onClick={() => handleButtonClick("M-")}>M-</button>
        <button onClick={() => handleButtonClick("±")}>±</button>
        <button onClick={() => handleButtonClick("RND")}>RND</button>

        <button onClick={handleClear} className="clear-button">
          AC
        </button>
        <button onClick={handleCalculate} className="equals-button">
          =
        </button>
        <button onClick={() => handleButtonClick("mr")}>MR</button>
      </div>
    </div>
  );
};

export default Calculator;
