import React from "react";
import "../../css/VehicleMaintenanceList.css";
import { IUsageAnalytics } from "../../dto/usageAnalytics";
interface VehicleProps {
  analytics: IUsageAnalytics[];
}
const VehicleUsageAnalyticsList: React.FC<VehicleProps> = ({ analytics }) => {
  return (
    <div className="vehicle-maintenance-list">
      <h2>Usage Analytics List</h2>
      <table className="vehicle-maintenance-table">
        <thead>
          <tr>
            <th>Hours Operated</th>
            <th>Distance Traveled</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {analytics.map(({ id, hoursOperated, distanceTraveled, date }) => (
            <tr key={id}>
              <td>{hoursOperated}</td>
              <td>{distanceTraveled}</td>
              <td>{date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleUsageAnalyticsList;
