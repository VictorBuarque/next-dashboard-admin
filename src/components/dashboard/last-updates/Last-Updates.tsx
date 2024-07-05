import React from "react";
import LastUpdateTable from "./partials/last-update-table/LastUpdateTable";

export default function LastUpdates() {
  return (
    <div className="w-full max-w-[99%] bg-slate-700 mt-4 p-2 rounded">
      <div>
        <h2 className="text-center text-xl font-bold">Ultimas Atualizações</h2>
      </div>
      <LastUpdateTable />
    </div>
  );
}
