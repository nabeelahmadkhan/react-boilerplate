import React, { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/logo/cash-craft-logo.svg";
import "./App.css";
import { useStore } from "./store";
import { useTheme } from "./context";
import Navbar from "@components/Navbar";
import Dashboard from "@pages/Dashboard";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const { theme, toggleTheme } = useTheme();

  const { bears, increasePopulation, removeAllBears } = useStore();

  return (
    <>
      <div className="container mx-auto">
        <div className={` app ${theme}-theme`}>
          <div>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>React Boilerplate</h1>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold underline">
              Hello, TailwindCSS!
            </h1>
          </div>

          <div>
            <h1>{bears} bears around here ...</h1>
            <p>Theme {theme}</p>
            <button className="btn" onClick={increasePopulation}>
              Increase Bear Population
            </button>
            <button onClick={removeAllBears}>Remove All Bears</button>
            <button onClick={toggleTheme}>Change Theme</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
