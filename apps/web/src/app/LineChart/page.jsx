import React, { useEffect } from 'react';
import { useClient } from 'next/data-client';
import ChartJS from 'chart.js/auto'; // Rename the import to avoid conflicts

const LineChart = () => {
  const client = useClient();

  useEffect(() => {
    // Check if the component is running on the client side before using useEffect
    if (client) {
      // Chart data and options
      const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'hsl(252, 82.9%, 67.8%)',
            borderColor: 'hsl(252, 82.9%, 67.8%)',
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      };

      const configLineChart = {
        type: 'line',
        data,
        options: {},
      };

      // Create the chart after the component has mounted
      var chartLine = new ChartJS(
        document.getElementById('chartLine'),
        configLineChart,
      );

      // Cleanup the chart when the component unmounts
      return () => {
        chartLine.destroy();
      };
    }
  }, [client]); // The dependency array includes the client variable

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="py-3 px-5 bg-gray-50">Line chart</div>
      <canvas className="p-10" id="chartLine"></canvas>
    </div>
  );
};

export default LineChart; // Rename the component to LineChart
