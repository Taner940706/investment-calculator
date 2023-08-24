import Header from "./components/Header";
import CalculatorForm from "./components/CalculatorForm";
import ResultTable from "./components/ResultTable";
import { useState } from "react";

function App() {
  const [currentSaving, setCurrentSaving] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState(null);

  const resetHandler = () =>{

    setCurrentSaving("");
    setDuration("");
    setExpectedReturn("");
    setYearlyContribution("");

  }

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
    setResult(yearlyData);
  };

  return (
    <div>
    
      <Header />
      <CalculatorForm resetHandler={resetHandler} setCurrentSaving={setCurrentSaving} setYearlyContribution={setYearlyContribution} setExpectedReturn={setExpectedReturn} setDuration={setDuration} currentSaving={currentSaving}
      yearlyContribution={yearlyContribution} expectedRetur={expectedReturn} duration={duration} calculateHandler={calculateHandler} />

      {!result && <p style={{textAlign: 'center'}}>No investment yet.</p>}
      { result && <ResultTable yearlyData={calculateHandler.yearlyData} initialInvestment = {currentSaving} /> }
    </div>
  );
}

export default App;
