import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(c => c + 1)
    // setCount(c => c + 1)
    // setCount(c => c + 1)
  }
  
  function decrement(){
    setCount(c => c - 1)
  }

  function reset(){
    setCount(0)
  }

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={increment}
        >
          Count is {count}
        </button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>

    </>
  );
}

export default Counter;
