import { useEffect, useState } from 'react';
import './App.css'

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
      <h1>Wordle (Lingo)</h1>
      {solution && <p>solution is {solution}</p>}
    </div>
  );
}

export default App