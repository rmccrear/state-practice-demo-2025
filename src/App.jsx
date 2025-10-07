import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // This is just like:
  // var count = 0;
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(3)
  const [timeouts, setTimeouts] = useState(3);

  function extraPoint() {
    // count = count + 1
    setCount(count + 1)
  }
  function safety() {
    // count = count + 1
    setCount(count + 2)
  }
  function touchdown() {
    // count = count + 1
    setCount(count + 6)
  }
  function fieldGoal() {
    // count = count + 1
    setCount(count + 3)
  }
  function decrement3() {
    // count = count + 1
    setCount(count - 3)
  }
  function reset() {
    setCount(0);
  }


  return (
    <>
      <p>Timeouts: {timeouts}</p>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>{count}</p>
      <h1>Vite + React {count}</h1>
      <div className="card">
        <button onClick={extraPoint}>
          Extra point
        </button>
        <button onClick={safety}>
          safety 
        </button>
        <button onClick={touchdown}>
          touchdown 
        </button>
        <button onClick={fieldGoal}>
          field goal 
        </button>
        <button onClick={decrement3}>
          Decrement by 3
        </button>
        <button onClick={reset}>
          Reset
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>{count}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
