import * as echarts from "echarts";

const Echarts = {
  SetOption: function (data, title, race) {
    let option = {
      title: {
        text: title || "",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: race,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["M", "T", "W", "F", "S"],
      },
      yAxis: {
        type: "value",
      },
      series: data,
    };
    return option;
  },
  InitChart: function (option, id) {
    var chartDom = document.getElementById(id);
    let mychart = echarts.init(chartDom);
    mychart.setOption(option);
  },
};
export default Echarts;
