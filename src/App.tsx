import React from 'react';
import logo from './logo.svg';
import './App.css';

import { WarscrollComponent } from './components/warscroll'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will be AoS Hero
        </p>
        <WarscrollComponent title="Lord Relictor on Dreadstallion" />
      </header>
    </div>
  );
}

export default App;
