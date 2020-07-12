import React from 'react';
import './App.css';

import { CounterComponent } from './components/counter'
import { WarscrollComponent } from './components/warscroll'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          AoS Hero
        </h1>
        <p>Sculpt your custom hero on the Anvil of Apotheosis</p>
        <WarscrollComponent title="Lord Relictor on Dreadstallion" />
        <CounterComponent />
      </header>
    </div>
  );
}

export default App;
