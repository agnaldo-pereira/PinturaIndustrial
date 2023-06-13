import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";

interface Feed {
  field2: number;
  field3: number;
  field6: number;
}

const ChartCards = () => {
  const [data, setData] = useState<number[][]>([]);

  const fetchData = async () => {
    try {
      const response3 = await axios.get<any>(
        "https://api.thingspeak.com/channels/1956370/fields/6.json?results=10"
      );
      const response1 = await axios.get<any>(
        "https://api.thingspeak.com/channels/1956370/fields/2.json?results=10"
      );
      const response2 = await axios.get<any>(
        "https://api.thingspeak.com/channels/1956370/fields/3.json?results=10"
      );

      const data3: number[] = response3.data.feeds.map((feed: Feed) => feed.field6); // Chuva
      const data2: number[] = response2.data.feeds.map((feed: Feed) => feed.field3); // Umidade do ar
      const data1: number[] = response1.data.feeds.map((feed: Feed) => feed.field2); // Temperatura do ar

      setData([data1, data2, data3]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const options = {
    title: {
      text: "Estação meteorológica",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Temperatura", "Chuva", "Umidade"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["", "", "", "", "", "", "", "", "", ""],
        //data: [],
      },
    ],
    yAxis: [
      {
        type: "value",
        min: -10,
        max: 100,
      },
    ],
    series: [
      {
        name: "Temperatura",
        showSymbol: false,
        type: "line",
        lineStyle: {
          color: "rgba(255, 165, 0, 1)"
        },
        itemStyle: {
          color: "rgba(255, 165, 0, 1)"
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 165, 0, 0.9)" // Cor da área abaixo da linha
              },
              {
                offset: 1,
                color: "rgba(255, 165, 0, 0)" // Cor transparente para o topo da área
              }
            ]
          },
          z: 3 // Valor maior para a área da Temperatura ficar na frente
        },
        emphasis: {
          focus: "series",
        },
        data: data[0] || [],
      },
      {
        name: "Chuva",
        showSymbol: false,
        type: "line",
        lineStyle: {
          color: "rgba(0, 0, 255, 1)"
        },
        itemStyle: {
          color: "rgba(0, 0, 255, 1)"
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(0, 0, 255, 0.5)" // Cor da área abaixo da linha
              },
              {
                offset: 1,
                color: "rgba(0, 0, 255, 0)" // Cor transparente para o topo da área
              }
            ]
          },
          z: 2 // Valor intermediário para a área da Chuva ficar no meio
        },
        emphasis: {
          focus: "series",
        },
        data: data[2] || [],
      },
      {
        name: "Umidade",
        showSymbol: false,
        type: "line",
        lineStyle: {
          color: "rgba(78, 197, 241, 1)"
        },
        itemStyle: {
          color: "rgba(78, 197, 241, 1)"
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(78, 197, 241, 0.5)" // Cor da área abaixo da linha
              },
              {
                offset: 1,
                color: "rgba(78, 197, 241, 0)" // Cor transparente para o topo da área
              }
            ]
          },
          z: 1 // Valor menor para a área da Umidade ficar atrás
        },
        emphasis: {
          focus: "series",
        },
        data: data[1] || [],
      },
    ],
  };

  return (
    <ReactEcharts
      option={options}
      style={{ width: "100%", height: "300px" }}
    ></ReactEcharts>
  );
};

export default ChartCards;
