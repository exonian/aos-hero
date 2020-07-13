import React from 'react';
import './App.css';

import { EditorComponent } from './components/editor';
import { WarscrollComponent } from './components/warscroll'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          AoS Hero
        </h1>
        <p>Sculpt your custom hero on the Anvil of Apotheosis</p>
        <WarscrollComponent />
      </header>
      <EditorComponent />
    </div>
  );
}

export default App;
