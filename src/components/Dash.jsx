import React from "react";
import Chart from "chart.js/auto";
import { useRef, useState, useEffect } from "react";
import "chartjs-adapter-date-fns";
//TO DO LIST
//hacer que los datos mayores a 55 queden en rojo
const Dash = ({ datos, label, unit, type }) => {
  const canvasRef = useRef(null);
  const [ChartData, setChartData] = useState(null);

  const changebackground = (datos) => {
    const hasValueAbove50 = datos.some((data) => data >= 55);
    return hasValueAbove50 ? "rgba(255, 99, 132, 0.2)" : "rgba(75, 192, 192, 0.2)";
  };

  const changecolor = (datos)=>{
    const hasValueAbove50 = datos.some((data) => data >= 55);
    return hasValueAbove50 ? "rgba(255, 99, 132, 1)" : "rgba(75, 192, 192, 1)";
  };
  const changelabel = (type) => {
    let labels = "";
    if (type === "line") {
      labels = [
        "2023-03-04 00:00:00",
        "2023-03-04 01:00:00",
        "2023-03-04 02:00:00",
        "2023-03-04 03:00:00",
        "2023-03-04 04:00:00",
        "2023-03-04 05:00:00",
        "2023-03-04 06:00:00",
      ];
    } else {
      labels = ["2023-03-04 06:00:00"];
    }
    return labels;
  };
  useEffect(() => {
    const chartData = new Chart(canvasRef.current, {
      type: type,
      data: {
        labels: changelabel(type),
        datasets: [
          {
            label: label,
            data: datos,
            fill: false,
            backgroundColor: changebackground(datos),
            borderColor: changecolor(datos),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
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

    setChartData(chartData);
    return () => {
      chartData.destroy();
    };
  }, [datos, label, unit, type]);

  return <canvas ref={canvasRef} width="25" height="25"></canvas>;
};

export default Dash;
