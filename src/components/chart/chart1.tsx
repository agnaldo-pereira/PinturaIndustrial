import ReactEcharts from "echarts-for-react";

/*const options = {

  grid: {

    left: 0,

    right: 0,

    bottom: 0,

    top: 0,

  },

  tooltip: {

    trigger: "axis",

    show: false,

  },




  legend: {

    data: ["Evaporation", "Precipitation", "Temperature"],

    show: false,

  },

  xAxis: [

    {

      type: "category",

      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

      axisPointer: {

        type: "shadow",

      },

      boundaryGap: false,

      show: false,

    },

  ],

  yAxis: [

    {

      type: "value",

      name: "Precipitation",

      min: 0,

      max: 24,

      interval: 50,

      axisLabel: {

        formatter: "{value} hs",

      },

      show: false,

    },

    {

      type: "value",

      name: "Temperatura",

      min: 0,

      max: 100,

      interval: 5,

      axisLabel: {

        formatter: "{value} °C",

      },

      show: false,

    },

  ],

  series: [

    {

      name: "Nível",

      type: "line",

      smooth: true,

      areaStyle: {},

      showSymbol: false,

      yAxisIndex: 1,

      color: "#fafa7b",

      z: 1,

      tooltip: {

        valueFormatter: function (value: any) {

          return value + "%";

        },

      },

      data: [80, 70, 75, 80, 75, 75, 85, 80, 80, 80],

    },

    {

      name: "Média mínima",

      type: "line",

      color: "#2531d4",

      showSymbol: false,

      smooth: true,

      yAxisIndex: 1,

      z: 3,

      lineStyle: {

        opacity: 0,

      },

      stack: "sombra",

      tooltip: {

        valueFormatter: function (value: any) {

          return value + "°C";

        },

      },

      data: [15, 14, 13, 10, 18, 20, 23, 23, 23, 23],

    },




    {

      name: "Media Máxima",

      type: "line",

      smooth: true,

      color: "#ff3434",

      showSymbol: false,

      yAxisIndex: 1,

      z: 3,

      lineStyle: {

        opacity: 0,

      },

      stack: "sombra",

      areaStyle: {

        color: "#ccc",

      },

      tooltip: {

        valueFormatter: function (value: any) {

          return value + "°C";

        },

      },

      data: [25, 26, 30, 28, 27, 33, 34, 34, 34, 34],

    },

    {

      name: "Média",

      type: "line",

      smooth: true,

      color: "#42bb42",

      showSymbol: false,

      yAxisIndex: 1,

      z: 3,

      tooltip: {

        valueFormatter: function (value: any) {

          return value + "°C";

        },

      },

      data: [20, 18, 16, 15, 22, 24, 28, 28, 28, 29],

    },

    {

      name: "Horas",

      color: "#8b9ef1",

      areaStyle: {},

      type: "line",

      barWidth: "60%",

      smooth: true,

      z: 2,

      tooltip: {

        valueFormatter: function (value: any) {

          return value + " hs";

        },

      },

      data: [12, 10, 8, 5, 10, 11, 6, 0, 0, 3],

    },

  ],

};*/

const options = {
    title: {
      text: 'Stacked Area Chart'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };


export default function ChartCards() {

  return <ReactEcharts option={options} style={{ width: "100%", height: "400px" }}></ReactEcharts>;

}