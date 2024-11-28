import React from "react";
import StatsCards from "../components/StatsCards";
import HospitalsTable from "../components/HospitalsTable";


const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-gray-50">
   
    <StatsCards/>
    <HospitalsTable/>
  </div>
  );
};

export default Dashboard;
