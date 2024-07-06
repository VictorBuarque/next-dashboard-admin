"use client";

import React, { PureComponent } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from "recharts";

const data = [
  { name: "Atualizados", value: 400, label: "Atualizados", color: "#00C49F" },
  {
    name: "Parcialmente Atualizados",
    value: 300,
    label: "Parcialmente Atualizados",
    color: "#FFBB28",
  },
  {
    name: "Não Atualizados",
    value: 300,
    label: "Não Atualizados",
    color: "#FF8042",
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/pie-chart-in-responsive-container-dmhf62";

  render() {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);

    return (
      <div className="flex w-full h-[300px]">
        <div className="flex w-full">
          <div className="text-center mr-4">
            <h1 className="font-bold my-4">Terminais</h1>
          </div>
          <ResponsiveContainer width="80%" height="100%">
            <PieChart>
              <Pie
                dataKey="value"
                data={data}
                label={({ name, value }) =>
                  `${((value / total) * 100).toFixed(1)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                payload={data.map((entry) => ({
                  id: entry.name,
                  type: "square",
                  value: entry.label,
                  color: entry.color,
                }))}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
