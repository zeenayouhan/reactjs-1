import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Zeena"></Greet>
      <Greet name="Riyana"></Greet>
      <Greet name="Ji"></Greet>
      <Welcome></Welcome>
          </div>
  );
}

export default App;
