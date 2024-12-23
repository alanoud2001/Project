import React, { useState } from 'react'

function Counter({ initialCount}) {
    const [count, setCounter] = useState(initialCount)
    const increment = () => {
        setCounter((prev) => prev + 1)
    }
    const decrement = () => { 
        setCounter((prev) => prev - 1);
    }
    const restart = () => {
        setCounter(0)
     }
    const switchSigns = () => { 
        setCounter((prev) => prev * -1)
    }
    return (
      <div>
        
        <h3 data-testid="count">{count}</h3>
        
        <button data-testid="increment" onClick={increment}>
         Increment
        </button>
        <button data-testid="decrement" onClick={decrement}>
          Decrement
        </button>
        <button data-testid="restart" onClick={restart}>
          Restart
        </button>
        <button data-testid="switchsign" onClick={switchSigns}>
          Switch Sign
        </button>
      </div>
    );
}
export default Counter
