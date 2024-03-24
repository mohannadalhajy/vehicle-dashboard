import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { VEHICLE_URL } from "../../config/API";
import { crud } from "../../api/crud";
import { IVehicle } from "../../dto/vehicle";
import "../../css/VehicleList.css";
const VehicleList = () => {
  const res = useQuery(VEHICLE_URL, () => crud.getAll({ url: VEHICLE_URL }));
  const vehicles = (res?.data?.data?.data.vehicles as IVehicle[]) || [];
  return (
    <div className="vehicle-list">
      <h2>Vehicle List</h2>
      <table className="vehicle-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>MAC Address</th>
            <th>Type</th>
            <th>Status</th>
            <th>Speed</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(
            ({
              id,
              model,
              mac_address,
              type,
              status,
              speed,
              latitude,
              longitude,
            }) => (
              <tr key={id}>
                <td className="details-link">
                  <Link to={`/vehicle/${id}`}>{id}</Link>
                </td>
                <td>{model}</td>
                <td>{mac_address}</td>
                <td>{type}</td>
                <td>{status}</td>
                <td>{speed}</td>
                <td className="map-link">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Map
                  </a>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
