import { useState } from 'react'
import StudentList from './components/StudentsList'
import './App.css'

function App() {
  let [counter,setCounter]= useState(0)
  //let count=0;  
  function increaseCount(e){
    setCounter(counter + 1)
    counter++;
  
  }
  function decreaseCount(e){
    setCounter(counter-1)
  }
  
  console.log(counter)
  return (
 <div>
  <h1>
    Counter
  </h1>
  <p>{counter}</p>
  <button className='button'onClick={increaseCount}>increase</button>
 <button onClick={decreaseCount}>decrease</button>
 <StudentList/>
 </div>

  );
}

export default App;

