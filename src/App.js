import { useState } from "react";
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);

    if (gender === "male") {
      let maleResult = gramsLeft / (weight * 0.7);
      setResult(maleResult);
    } else {
      let femaleResult = gramsLeft / (weight * 0.6);
      setResult(femaleResult);
    }
    e.preventDefault();
  }

  return (
    <>
      <h1>Calculating alcohol blood level</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="inline">Weight</label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label className="inline">Bottles</label>
          <input name="bottles" type="number" step="1" value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div>
          <label className="inline">Time</label>
          <input name="Time" type="number" step="1" value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div className="gender">
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div>
          <button>Calculate</button>
        </div>
        <div>
          <output>Blood alcohol level: {result.toFixed(1)}</output>
        </div>
      </form>
    </>
  );
}

export default App;
