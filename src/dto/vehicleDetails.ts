import { IMaintenance } from "./maintenance";
import { IUsageAnalytics } from "./usageAnalytics";
import { IVehicle } from "./vehicle";

export interface IVehicleDetails {
    vehicle: IVehicle;
    maintenances: IMaintenance[];
    usageAnalytics: IUsageAnalytics[];
  }
  