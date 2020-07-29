import React from 'react';
import DataView from '../components/dashboard/DataView';
import DataTable from '../components/dashboard/DataTable';
import BarChart from '../components/dashboard/BarChart';

function Dashboard() {
  return (
    <div>
      <div>
        <DataView />
      </div>
      <div className="mt-12">
        <DataTable />
      </div>
      <div className="mt-12">
        <BarChart />
      </div>
    </div>
  );
}

export default Dashboard;
