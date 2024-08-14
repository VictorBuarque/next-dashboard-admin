import React from "react";
import LastUpdateTable from "./partials/last-update-table/LastUpdateTable";

export default function LastUpdates() {
  return (
    <div className="w-full mt-4 mr-auto rounded ">
      <h2 className="text-center text-xl font-bold py-2">Ultimas Atualizações</h2>
      <LastUpdateTable />
    </div>
  );
}
