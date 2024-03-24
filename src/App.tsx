import React from "react";
import Dashboard from "./components/Dashboard";
import VehicleDetails from './components/vehicle/VehicleDetails';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
