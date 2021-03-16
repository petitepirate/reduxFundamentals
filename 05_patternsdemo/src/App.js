import React from 'react';
import Math from './Math'
import NumberInputs from './NumberInputs'
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Math />
        <NumberInputs />
        <Counter />
      </header>
    </div>
  );
}

export default App;

