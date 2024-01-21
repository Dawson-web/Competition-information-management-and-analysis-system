import * as echarts from "echarts";

const Echarts = {
  SetOption: function (data, title, race, xdata) {
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
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xdata || ["M", "T", "W", "F", "S"],
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
