import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { TrackerService } from '../../../../service/TrackerService';

function BarChart() {
  const chartColors = ["#38C172", "#D17A30", "#3468D9"]
  const [uptimeData, setUptimeData] = useState([]);
  const trackerService = new TrackerService();
  useEffect(() => {
    trackerService.getTrackerData().then((data) => {
      setUptimeData(data);
    });
  }, []);
  let chartContent;
  if (uptimeData.length > 0) {
    let chartData = {
      labels: uptimeData[0].uptime.timestamps,
      datasets: [],
    };
    uptimeData.forEach((elem, i) => {
      let dataset = {
        label: elem.name,
        backgroundColor: chartColors[i],
        data: elem.uptime.data,
      };
      chartData.datasets.push(dataset);
    });
    chartContent = <Chart type="bar" data={chartData} />;
  } else {
    chartContent = <div>No data available.</div>;
  }
  return (
    <div>
      <h3 className="font-bold text-2xl">Barchart</h3>
      {chartContent}
    </div>
  );
}

export default BarChart;
