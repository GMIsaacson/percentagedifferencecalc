import BigFractionCalculator from "./bignumberfraction";
import DecimalToFractionCalculator from "./decimaltofraction";
import FractionCalculator from "./fractions";
import FractionCalculatorsteps from "./fractionswithsteps";
import MixedNumberCalculator from "./mixednumbers";
import Percentage from "./percentage";
import PercentageChangeCalculator from "./percentagechange";
import PercentageDifferenceCalculator from "./percentagedifference";
import Phrasepercentage from "./phrasepercentage";
import Calculator from "./scientificcalculator";
import SimplifyFractionsCalculator from "./simplifyfraction";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="calculator-container">
        <div className="">
          <h2 className="calculator-title">Percentage Calculator</h2>
          <Percentage />
        </div>
        <div className="">
          <h2 className="calculator-title">Phrase Percentage Calculator</h2>
          <Phrasepercentage />
        </div>
        <div className="">
          <h2 className="calculator-title">Percentage Difference Calculator</h2>
          <PercentageDifferenceCalculator />
        </div>
        <div className="">
          <h2 className="calculator-title">Percentage Change Calculator</h2>
          <PercentageChangeCalculator />
        </div>
      </div>
    </div>
  );
}
