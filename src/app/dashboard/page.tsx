import Card from "@/components/dashboard/card/Card";
import { Component as LineChart } from "@/components/dashboard/chart/partials/line-chart/LineChart";

import LastUpdates from "@/components/dashboard/last-updates/Last-Updates";
import RightBar from "@/components/dashboard/right-bar/RightBar";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col m-4">
      <div className="flex">
        <div className="flex flex-col w-full  ">
          <Card />
          <LastUpdates />
          <LineChart />
        </div>
        <RightBar />
      </div>
    </div>
  );
}
