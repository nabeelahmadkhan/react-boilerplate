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
      <Navbar />

      <Dashboard />
      {/* <div className="container mx-auto">
        <div className={` app ${theme}-theme`}>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Cash Craft + React</h1>
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold underline">
              Hello, TailwindCSS!
            </h1>
          </div>
          <p className="read-the-docs">
            The Cash Craft is a user-friendly application designed to help
            individuals and businesses monitor and manage project-related
            expenses. It allows users to log, categorize, and track all expenses
            associated with a specific project in real time. Key features
            include budget allocation, expense categorization, automatic report
            generation, and visual dashboards for financial insights. The app
            supports multi-user collaboration, making it ideal for teams working
            on shared projects. With reminders for due payments and expense
            limits, the app helps users stay within budget and improve financial
            planning and decision-making.
          </p>

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
      </div> */}
    </>
  );
};

export default App;
