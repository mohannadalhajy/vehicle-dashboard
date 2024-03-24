import React from "react";
import "../../css/VehicleMaintenanceList.css";
import { IMaintenance } from "../../dto/maintenance";
interface VehicleProps {
  maintenances: IMaintenance[];
}
const VehicleMaintenanceList: React.FC<VehicleProps> = ({ maintenances }) => {
  return (
    <div className="vehicle-maintenance-list">
      <h2>Maintenances List</h2>
      <table className="vehicle-maintenance-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {maintenances.map(({ id, type, description, cost, date }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{description}</td>
              <td>{cost}</td>
              <td>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleMaintenanceList;
