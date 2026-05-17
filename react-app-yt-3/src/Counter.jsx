import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(c => c + 1)
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
      </section>

    </>
  );
}

export default Counter;
