import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactEcharts from "echarts-for-react";

const ChartCards = () => {
  const [data, setData] = useState<number[][]>([]);

  const fetchData = async () => {
    try {
      const response1 = await axios.get<any>(
        "https://api.thingspeak.com/channels/1956370/fields/5.json?results=1"
      );

      const data1: number[] = response1.data.feeds.map(
        (feed: any) => feed.field5
      );

      setData([data1]);
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

  const option = {
    title: {
        text: "Necessidade de aquececimento",
      },
    series: [
      {
        type: 'gauge',
        center: ['50%', '70%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 20,
        splitNumber: 10,//12,
        itemStyle: {
          color: '#FFAB91'
        },
        progress: {
          show: true,
          width: 30
        },
        pointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            width: 30
          }
        },
        axisTick: {
          distance: -45,
          splitNumber: 5,
          lineStyle: {
            width: 2,
            color: '#999'
          }
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 3,
            color: '#999'
          }
        },
        axisLabel: {
          distance: -20,
          color: '#999',
          fontSize: 20
        },
        anchor: {
          show: false
        },
        title: {
          show: true
        },
        detail: {
          valueAnimation: true,
          width: '60%',
          lineHeight: 40,
          borderRadius: 8,
          offsetCenter: [0, '-15%'],
          fontSize: 30,
          fontWeight: 'bolder',
          formatter: '{value} °C',
          color: 'inherit'
        },
        data: [
          {
            value: data[0] || 0
          }
        ]
      },
      {
        type: 'gauge',
        center: ['50%', '70%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 20,
        itemStyle: {
          color: '#FD7347'
        },
        progress: {
          show: true,
          width: 8
        },
        pointer: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        detail: {
          show: false
        },
        data: [
          {
            value: data[0] || 0
          }
        ]
      }
    ]
  };

  return (
    <ReactEcharts
      option={option}
      style={{ width: "100%", height: "300px" }}
    />
  );
};

export default ChartCards;
