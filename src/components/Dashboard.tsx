import React from "react";
import VehicleList from "./vehicle/VehicleList";
import "../css/Dashboard.css"
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Vehicle Tracking and Management</h1>
      </header>
      <div className="dashboard-content">
        <VehicleList />
      </div>
    </div>
  );
};

export default Dashboard;
