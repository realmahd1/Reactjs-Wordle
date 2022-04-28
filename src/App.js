import { useEffect, useState } from 'react';
import './App.css'
import Wordle from './components/Wordle';
import data from './data/db.json'

function App() {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    //randomly selects a solution from the list
    const randomSolution = data.solutions[Math.floor(Math.random() * data.solutions.length)];
    setSolution(randomSolution.word);

  }, [setSolution]);
  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App