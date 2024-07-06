import Card from "@/components/dashboard/card/Card";
import Chart from "@/components/dashboard/chart/Chart";
import LastUpdates from "@/components/dashboard/last-updates/Last-Updates";
import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <Card />
      <LastUpdates />
      <Chart />
    </div>
  );
}
