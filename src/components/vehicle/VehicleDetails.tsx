import React from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { VEHICLE_URL } from "../../config/API";
import { crud } from "../../api/crud";
import { IVehicleDetails } from "../../dto/vehicleDetails";
import VehicleCard from "./VehicleCard";
import VehicleMaintenanceList from "./VehicleMaintenanceList";
import "../../css/VehicleDetails.css"
import VehicleUsageAnalyticsList from "./VehicleUsageAnalyticsList";
const VehicleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const res = useQuery(VEHICLE_URL, () =>
    crud.getOne({ url: VEHICLE_URL, id })
  );
  // Assuming you have a function to fetch vehicle details based on the ID

  const vehicleDetails: IVehicleDetails =
    (res?.data?.data?.data as IVehicleDetails) || {};
  if (!(vehicleDetails && vehicleDetails.vehicle)) {
    return <div>Vehicle not found!</div>;
  }

  return (
    <div className="vehicle-details">
      <Link to="/" className="vehicles-button">
        Vehicles Dashboard
      </Link>
      <VehicleCard vehicle={vehicleDetails.vehicle} />
      <VehicleMaintenanceList maintenances={vehicleDetails.maintenances} />
      <VehicleUsageAnalyticsList analytics={vehicleDetails.usageAnalytics} />
    </div>
  );
};

export default VehicleDetails;
