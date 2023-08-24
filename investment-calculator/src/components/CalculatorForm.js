import React from "react";
import "./CalculatorForm.css";

export default function CalculatorForm({resetHandler, setCurrentSaving, setYearlyContribution, setExpectedReturn, setDuration, currentSaving,
  yearlyContribution, expectedReturn, duration }) {

  const submitHandler = (event) => {
    event.preventDefault();


  }

  

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input value={currentSaving} onChange={e => setCurrentSaving(e.target.value)} type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input value={yearlyContribution} onChange={e => setYearlyContribution(e.target.value)} type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input value={expectedReturn} onChange={e => setExpectedReturn(e.target.value)} type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input value={duration} onChange={e => setDuration(e.target.value)} type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
