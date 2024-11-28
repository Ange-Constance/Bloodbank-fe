import React from "react";
import Card from "./Card";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      <Card text="40 Hospitals" icon="🏥" bgColor="bg-red-100" textColor="text-red-500" />
      <Card text="200 Donors" icon="🩸" bgColor="bg-pink-100" textColor="text-pink-500" />
      <Card text="200 Volunteers" icon="🤝" bgColor="bg-orange-100" textColor="text-orange-500" />
    </div>
  );
};

export default StatsCards;
