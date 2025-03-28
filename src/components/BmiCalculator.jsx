import React, { useState } from "react";

const BmiCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      alert("Please enter both height and width!");
      return;
    }

    const heightInMeter = parseFloat(height) / 100;
    const bmiValue = (parseFloat(weight) / Math.sqrt(heightInMeter, 2)).toFixed(
      2
    );
    setBmi(bmiValue);

    let bmiStatus = "";
    if (bmiValue < 18.5) {
      bmiStatus = "Underweight";
    } else if (bmiValue < 24.9) {
      bmiStatus = "Normal weight";
    } else if (bmiValue < 29.9) {
      bmiStatus = "Overweight";
    } else {
      bmiStatus = "Obesity";
    }

    setStatus(bmiStatus);
  };
  return (
    <div className="container">
      <h1 className="head">BMI Calculator</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="input-box">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="text"
            name={weight}
            value={weight}
            id="weight"
            placeholder="please enter your weight..."
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="text"
            name={height}
            id="height"
            value={height}
            placeholder="please enter your height..."
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="btn-box">
          <button type="submit" value="Calculate" className="submit-btn">
            Calculate
          </button>
        </div>
      </form>

      {bmi && (
        <div className="result">
          <p>Your BMI : {bmi}</p>
          <p>Status : {status}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
