import React, { useState, useEffect } from 'react';
import DataTable from '../components/dashboard/DataTable';
import DataView from '../components/dashboard/DataView';
import BarChart from '../components/dashboard/BarChart';

function Dashboard() {
  return (
    <>
      <div>
        <DataView />
      </div>
      <div className="mt-12">
        <DataTable />
      </div>
      <div className="mt-12">
        <BarChart />
      </div>
    </>
  );
}

export default Dashboard;
