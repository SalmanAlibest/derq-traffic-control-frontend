import { useState } from "react";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="container">
      <h1 className="main-title">Traffic Dashboard</h1>
      <Dashboard />
    </div>
  );
}

export default App;
