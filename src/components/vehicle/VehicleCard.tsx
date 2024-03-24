import React from "react";
import { IVehicle } from "../../dto/vehicle";
import "../../css/VehicleCard.css";
interface VehicleProps {
  vehicle: IVehicle;
}

const VehicleCard: React.FC<VehicleProps> = ({ vehicle }) => {
  const { model, mac_address, type, speed, status, latitude, longitude } =
    vehicle;

  return (
    <div>
      <h2>Vehicle Details</h2>
      <div className="card-container">
        <Detail label="Model" value={model} />
        <Detail label="Mac address" value={mac_address} />
        <Detail label="Type" value={type} />
        <Detail label="Speed" value={speed} />
        <Detail label="Status" value={status} />
        {latitude && longitude && (
          <div className="card">
            <div className="map-link">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface DetailProps {
  label: string;
  value: string | number;
}

const Detail: React.FC<DetailProps> = ({ label, value }) => {
  return (
    <div className="card">
      <strong>{label}:</strong>
      <span>{value}</span>
    </div>
  );
};

export default VehicleCard;
