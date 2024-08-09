
import { useState } from 'react'
import Home from './home/Home';
import './App.css'

function App() {
  // const count = 0;
  const[count, setCount] = useState(0);

  return (
    <>
     <div className='text-center'>React Simple Component</div>
      <h3 className='bg-light p-1'>Count:{count}<hr/>
      <button className="btn btn-primary mx-1"onClick={() => setCount(count + 1)}>Increase Count</button>
      {/* Conditional Rendering : particular element or component will render at some condition */}
    {count > 0 &&  <button className="btn btn-secondary mx-1" onClick={() => setCount(count - 1)}>Decrease Count</button>}
      </h3>
      <Home appCount={count} setCount={setCount}/>

    </>
  )
}

export default App
