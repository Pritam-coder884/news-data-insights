import React, { useState } from "react";
import BarChart from "../../Components/chart/BarChart";
import PieChart from "../../Components/chart/PieChart";

const Analytics = () => {
  return (
    <div>
      <h1>Analytics</h1>
      <div className="flex items-center justify-center gap-6">
        <div className="w-[500px]">
          <BarChart />
        </div>
        <div className="w-[200px]">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
