import React from "react";
import Chart from "chart.js/auto";
import { useRef, useState, useEffect } from "react";
import "chartjs-adapter-date-fns";

const Dash = ({ datos, label, unit, type }) => {
  const canvasRef = useRef(null);
  const [ChartData, setChartData] = useState(null);
  const changelabel = (type) => {
    let labels = "";
    if (type === "line") {
      labels = [
        "2022-03-04 00:00:00",
        "2022-03-04 01:00:00",
        "2022-03-04 02:00:00",
        "2022-03-04 03:00:00",
        "2022-03-04 04:00:00",
        "2022-03-04 05:00:00",
        "2022-03-04 06:00:00",
      ];
    } else {
      labels = ["2022-03-04 06:00:00"];
    }
    return labels;
  };
  useEffect(
    (ChartData) => {
      ChartData = new Chart(canvasRef.current, {
        type: type,
        data: {
          labels: changelabel(type),
          datasets: [
            {
              label: label,
              data: datos,
              fill: false,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: "time",
              time: {
                unit: unit,
              },
            },
            y: {
              ticks: {
                beginAtZero: true,
              },
              min: 0,
              max: 70,
            },
          },
        },
      });

      setChartData(ChartData);
      return () => {
        ChartData.destroy();
      };
    },
    [datos, label, unit, type]
  );

  return <canvas ref={canvasRef} width="25" height="25"></canvas>;
};
export default Dash;
