import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [buttcolor, setButtcolor] = useState('red')
  const newButtonColor = buttcolor === 'red' ? 'blue' : 'red'
  return (
    <div className="App">
      <button style={{backgroundColor: buttcolor}} onClick={() => setButtcolor(newButtonColor)}>Change to {newButtonColor}</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
