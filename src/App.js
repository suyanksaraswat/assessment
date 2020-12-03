import './App.css';
import { useState } from 'react';

function App() {
  const totalBoggies = 5;
  const tunelCapacity = 3;
  const [inBoggies, setInBoggies] = useState([5, 4, 3, 2, 1]);
  const [outBoggies, setOutBoggies] = useState([0, 0, 0, 0, 0]);
  const [insideTunnel, setInsideTunnel] = useState([0, 0, 0]);
  const [idx, setIdx] = useState(0);

  const handleNext = () => {
    const newData = [...insideTunnel];
    const inBoggiesDup = [...inBoggies];
    const outBoggiesDup = [...outBoggies];

    if (idx >= totalBoggies) {
      newData.splice(0, 0, 0);
      newData.pop();
    }
    else {
      newData.splice(0, 0, idx+1);
      newData.pop();
      inBoggiesDup.splice(0, 0, 0);
      inBoggiesDup.pop();
    }
    if (idx >= tunelCapacity && idx <= 7) {
      outBoggiesDup.splice(0, 0, idx-2);
      outBoggiesDup.pop();
    }
    if (idx > 7) {
      inBoggiesDup.splice(0, 0, idx-7);
      inBoggiesDup.pop();
      outBoggiesDup.splice(0, 0, 0);
      outBoggiesDup.pop();
    }
    setInsideTunnel(newData);
    setInBoggies(inBoggiesDup);
    setOutBoggies(outBoggiesDup);
    setIdx(idx+1);
    if (idx === 12) {
      setIdx(0);
    }
  }

  return (
    <div className="App">
      Hello!
      <div>
        <span style={{border: '1px solid'}}>
          {inBoggies}
        </span>
        <span style={{border: '1px solid'}}>
          {insideTunnel}
        </span>
        <span style={{border: '1px solid'}}>
          {outBoggies}
        </span>
      </div>
      <button
        onClick={() => handleNext()}
      >
        Next
      </button>
    </div>
  );
}

export default App;
