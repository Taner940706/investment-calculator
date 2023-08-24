import React from "react";
import "./ResultTable.css";
export default function ResultTable({yearlyData, initialInvestment}) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        { yearlyData?.map((yearlyData) => (
            <tr key={yearlyData.year}>
            <td>{yearlyData.year}</td>
            <td>{yearlyData.savingsEndOfYear}</td>
            <td>{yearlyData.yearlyInterest}</td>
            <td>{yearlyData.savingsEndOfYear - initialInvestment - yearlyData.yearlyContribution * yearlyData.year}</td>
            <td>{initialInvestment + yearlyData.yearlyContribution * yearlyData.year}</td>
          </tr>
        )) }
        
      </tbody>
    </table>
  );
}
