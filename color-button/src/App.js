import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName){
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttcolor, setButtcolor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttcolor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div className="App">
      <div>

      <button
        style={{ backgroundColor: disabled ? 'gray' : buttcolor }}
        onClick={() => setButtcolor(newButtonColor)}
        disabled={disabled}
        >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disable-button-ckeckbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        />
      <label htmlFor="disable-button-ckeckbox">Disable Button</label>
        </div>

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
