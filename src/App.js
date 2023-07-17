import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  //State creation
  const [principle, setPrinciple] = useState('')
  const [year, setYear] = useState('')
  const [rate, setRate] = useState('')
  const [interest, setInterest] = useState('')

  console.log(principle);
  console.log(rate);
  console.log(year);

  const handleCalculate = (e) => {
    let output = principle * year * rate / 100
    console.log(output);
    setInterest(output)
  }

  const handleReset = (e) => {
    setRate('')
    setYear('')
    setInterest('')
    setPrinciple('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="head">
            <h1>
              Simple Interest Calculator
            </h1>
            <p>A simple interest calculator is a utility tool that
              calculates the interest on loans or savings without compounding.
              You may calculate the simple interest on the principal amount on a
              daily, monthly, or yearly basis. The simple interest calculator has
              a formula box, where you enter the principal amount, annual rate, and
              period in days, months, or years. The calculator will display interest
              on the loan or the investment.</p>
          </div>

          <div className="card">

            <h3 className="symbol">&#8377; {interest}</h3>
            <p id='para'>Your Total Simple Interest</p>

          </div>

          <div className='input'>

            <TextField id="outlined-basic" label="Principle Amount" variant="outlined"
              onChange={e => setPrinciple(e.target.value)} value={principle}
            />
            <br />
            <TextField id="outlined-basic" label="Rate of Interest" variant="outlined"
              onChange={e => setRate(e.target.value)} value={rate}
            />
            <br />
            <TextField id="outlined-basic" label="Year" variant="outlined"
              onChange={e => setYear(e.target.value)} value={year}
            />

            <br />
            <Button
              onClick={handleCalculate}
              variant="contained">Calculate</Button>
            <br />
            <Button
              onClick={handleReset}
              variant="outlined">Reset</Button>

          </div>



        </div>

      </header>
    </div>
  );
}

export default App;
