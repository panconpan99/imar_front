import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";

const Board1 = () => {
  const [chartData, setChartData] = useState(null);
  const getRandomData = () => {
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push(Math.floor(Math.random() * 50) + 10);
    }
    return data;
  };
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "Sales",
            data: getRandomData(),
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            ticks: {
              beginAtZero: true,
            },
          },
        },
      },
    });
    setChartData(chart);
    return ()=>{
        chart.destroy()
    }
  }, []);

  const Navigate = useNavigate();

  const HandleButtonClick = () => {
    Navigate("/");
  };
  return (
    <>
      <div>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
      <Box>
        <h1> pasaste </h1>
        <Button onClick={HandleButtonClick}>volver</Button>
      </Box>
    </>
  );
};

export default Board1;
