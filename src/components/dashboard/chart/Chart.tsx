import React from "react";
import PieChart from "./partials/pie-chart/PieChart";

export default function Chart() {
  return (
    <div className="min-w-screen h-full ">
      <div className="justify-start">
        <PieChart />
      </div>
    </div>
  );
}
