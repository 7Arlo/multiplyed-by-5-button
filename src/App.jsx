import { useState } from 'react';
import './App.css'

function App() {
  const[count, setcount] = useState(1);

  function multiply() {
    setcount(count * 5)
  } 


  return (
    <>
      <header></header>
      <main>
        <h1>{count}</h1>
        <button onClick={multiply}>Click</button>
<p>Intial Value Multiplied By ' 5 '</p>
      </main>
      <footer></footer>
    </>
  )
}

export default App
