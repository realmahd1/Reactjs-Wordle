import { useEffect, useState } from 'react';
import './App.css'
import Wordle from './components/Wordle';

function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    //fetches the solution from the server
    const jsonServerUrl = 'http://localhost:3001/solutions';
    fetch(jsonServerUrl)
    .then(res => res.json())
    .then(json=>{
      //randomly selects a solution from the list
      const randomSolution = json[Math.floor(Math.random() * json.length)];
      setSolution(randomSolution.word);
    })
  },[setSolution]);
  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App