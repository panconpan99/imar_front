import React from "react";
import Chart from "chart.js/auto";
import { useRef, useState, useEffect } from "react";
import 'chartjs-adapter-date-fns';

const Dash = ({ datos, tipo ,unit}) => {
  const canvasRef = useRef(null);
  const [ChartData, setChartData] = useState(null);

  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: [
          "2022-03-04 00:00:00",
          "2022-03-04 01:00:00",
          "2022-03-04 02:00:00",
          "2022-03-04 03:00:00",
          "2022-03-04 04:00:00",
          "2022-03-04 05:00:00",
          "2022-03-04 06:00:00",
        ],
        datasets: [
          {
            label: tipo,
            data: datos,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type:'time',
            time:{
              unit:unit,
            }
          },
          y: {
            ticks: {
              beginAtZero: true,
            },
          },
        },
      },
    });

    setChartData(chart);
    return () => {
      chart.destroy();
    };
  }, [datos,tipo,unit]);

  return <canvas ref={canvasRef} width="25" height="25"></canvas>;
};
export default Dash;
