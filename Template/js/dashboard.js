(function ($) {
  "use strict";
  $(function () {
    if ($("#order-chart").length) {
      var areaData = {
        labels: [
          "10",
          "",
          "",
          "20",
          "",
          "",
          "30",
          "",
          "",
          "40",
          "",
          "",
          "50",
          "",
          "",
          "60",
          "",
          "",
          "70",
        ],
        datasets: [
          {
            data: [
              800,
              700,
              650,
              750,
              850,
              830,
              810,
              650,
              "600",
              "650",
              "350",
              "590",
              "350",
              "620",
              "500",
              "990",
              "780",
              "650",
            ],
            borderColor: ["#4747A1"],
            borderWidth: 2,
            fill: false,
            label: "Orders",
          },
        ],
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false,
          },
        },
        scales: {
          xAxes: [
            {
              display: true,
              ticks: {
                display: true,
                padding: 10,
                fontColor: "#6C7383",
              },
              gridLines: {
                display: false,
                drawBorder: false,
                color: "transparent",
                zeroLineColor: "#eeeeee",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                display: true,
                autoSkip: false,
                maxRotation: 0,
                stepSize: 200,
                min: 200,
                max: 1200,
                padding: 18,
                fontColor: "#6C7383",
              },
              gridLines: {
                display: true,
                color: "#f2f2f2",
                drawBorder: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        elements: {
          line: {
            tension: 0.35,
          },
          point: {
            radius: 0,
          },
        },
      };
      var revenueChartCanvas = $("#order-chart").get(0).getContext("2d");
      var revenueChart = new Chart(revenueChartCanvas, {
        type: "line",
        data: areaData,
        options: areaOptions,
      });
    }
    if ($("#order-chart-dark").length) {
      var areaData = {
        labels: [
          "10",
          "",
          "",
          "20",
          "",
          "",
          "30",
          "",
          "",
          "40",
          "",
          "",
          "50",
          "",
          "",
          "60",
          "",
          "",
          "70",
        ],
        datasets: [
          {
            data: [
              200,
              480,
              700,
              600,
              620,
              350,
              380,
              350,
              850,
              "600",
              "650",
              "350",
              "590",
              "350",
              "620",
              "500",
              "990",
              "780",
              "650",
            ],
            borderColor: ["#4747A1"],
            borderWidth: 2,
            fill: false,
            label: "Orders",
          },
          {
            data: [
              400,
              450,
              410,
              500,
              480,
              600,
              450,
              550,
              460,
              "560",
              "450",
              "700",
              "450",
              "640",
              "550",
              "650",
              "400",
              "850",
              "800",
            ],
            borderColor: ["#F09397"],
            borderWidth: 2,
            fill: false,
            label: "Downloads",
          },
        ],
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false,
          },
        },
        scales: {
          xAxes: [
            {
              display: true,
              ticks: {
                display: true,
                padding: 10,
                fontColor: "#fff",
              },
              gridLines: {
                display: false,
                drawBorder: false,
                color: "transparent",
                zeroLineColor: "#575757",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              ticks: {
                display: true,
                autoSkip: false,
                maxRotation: 0,
                stepSize: 200,
                min: 200,
                max: 1200,
                padding: 18,
                fontColor: "#fff",
              },
              gridLines: {
                display: true,
                color: "#575757",
                drawBorder: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        elements: {
          line: {
            tension: 0.35,
          },
          point: {
            radius: 0,
          },
        },
      };
      var revenueChartCanvas = $("#order-chart-dark").get(0).getContext("2d");
      var revenueChart = new Chart(revenueChartCanvas, {
        type: "line",
        data: areaData,
        options: areaOptions,
      });
    }

    if ($("#skills-chart").length) {
      var data = {
        labels: ["Mat", "Sci", "Eng", "His", "Geo", "Com", "Art", "Bio"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 90, 81, 56, 55, 40, 78],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
          {
            label: "My Second Dataset",
            data: [28, 48, 40, 19, 96, 27, 100, 45],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
          },
        ],
      };

      var skillsOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false,
          },
        },

        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        elements: {
          line: {
            tension: 0.35,
          },
          point: {
            radius: 0,
          },
        },
      };

      var skillsChartCanvas = $("#skills-chart").get(0).getContext("2d");
      var skillsChart = new Chart(skillsChartCanvas, {
        type: "radar",
        data: data,
        options: skillsOptions,
      });
    }

    if ($("#sales-chart").length) {
      var SalesChartCanvas = $("#sales-chart").get(0).getContext("2d");
      var SalesChart = new Chart(SalesChartCanvas, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Offline Sales",
              data: [480, 230, 470, 210, 330],
              backgroundColor: "#98BDFF",
            },
            {
              label: "Online Sales",
              data: [400, 340, 550, 480, 170],
              backgroundColor: "#4B49AC",
            },
          ],
        },
        options: {
          cornerRadius: 5,
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0,
            },
          },
          scales: {
            yAxes: [
              {
                display: true,
                gridLines: {
                  display: true,
                  drawBorder: false,
                  color: "#F2F2F2",
                },
                ticks: {
                  display: true,
                  min: 0,
                  max: 560,
                  callback: function (value, index, values) {
                    return value + "$";
                  },
                  autoSkip: true,
                  maxTicksLimit: 10,
                  fontColor: "#6C7383",
                },
              },
            ],
            xAxes: [
              {
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  fontColor: "#6C7383",
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  display: false,
                },
                barPercentage: 1,
              },
            ],
          },
          legend: {
            display: false,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        },
      });
      document.getElementById("sales-legend").innerHTML =
        SalesChart.generateLegend();
    }
    if ($("#sales-chart-dark").length) {
      var SalesChartCanvas = $("#sales-chart-dark").get(0).getContext("2d");
      var SalesChart = new Chart(SalesChartCanvas, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [
            {
              label: "Offline Sales",
              data: [480, 230, 470, 210, 330],
              backgroundColor: "#98BDFF",
            },
            {
              label: "Online Sales",
              data: [400, 340, 550, 480, 170],
              backgroundColor: "#4B49AC",
            },
          ],
        },
        options: {
          cornerRadius: 5,
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0,
            },
          },
          scales: {
            yAxes: [
              {
                display: true,
                gridLines: {
                  display: true,
                  drawBorder: false,
                  color: "#575757",
                },
                ticks: {
                  display: true,
                  min: 0,
                  max: 500,
                  callback: function (value, index, values) {
                    return value + "$";
                  },
                  autoSkip: true,
                  maxTicksLimit: 10,
                  fontColor: "#F0F0F0",
                },
              },
            ],
            xAxes: [
              {
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  fontColor: "#F0F0F0",
                },
                gridLines: {
                  color: "#575757",
                  display: false,
                },
                barPercentage: 1,
              },
            ],
          },
          legend: {
            display: false,
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        },
      });
      document.getElementById("sales-legend").innerHTML =
        SalesChart.generateLegend();
    }

    if ($("#goals-chart").length) {
      var goalsdata = {
        labels: ["Completed", "Uncompleted"],
        datasets: [
          {
            label: "My First Dataset",
            data: [75, 25],
            backgroundColor: ["#9d4ee7", "#eee"],
            hoverOffset: 4,
          },
        ],
      };

      var goalsOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false,
          },
        },

        legend: {
          display: true,
        },
        tooltips: {
          enabled: true,
        },
        elements: {
          line: {
            tension: 0.35,
          },
          point: {
            radius: 0,
          },
        },
      };

      var goalsCanvas = $("#goals-chart").get(0).getContext("2d");
      var goalsChart = new Chart(goalsCanvas, {
        type: "doughnut",
        data: goalsdata,
        options: goalsOptions,
      });
    }

    if ($("#north-america-chart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            data: [100, 50, 50],
            backgroundColor: ["#4B49AC", "#FFC100", "#248AFD"],
            borderColor: "rgba(0,0,0,0)",
          },
        ],
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
            borderWidth: 4,
          },
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="report-chart">');
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[0] +
              '"></div><p class="mb-0">Offline sales</p></div>'
          );
          text.push('<p class="mb-0">88333</p>');
          text.push("</div>");
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[1] +
              '"></div><p class="mb-0">Online sales</p></div>'
          );
          text.push('<p class="mb-0">66093</p>');
          text.push("</div>");
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[2] +
              '"></div><p class="mb-0">Returns</p></div>'
          );
          text.push('<p class="mb-0">39836</p>');
          text.push("</div>");
          text.push("</div>");
          return text.join("");
        },
      };
      var northAmericaChartPlugins = {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "500 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#13381B";

          var text = "90",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      };
      var northAmericaChartCanvas = $("#north-america-chart")
        .get(0)
        .getContext("2d");
      var northAmericaChart = new Chart(northAmericaChartCanvas, {
        type: "doughnut",
        data: areaData,
        options: areaOptions,
        plugins: northAmericaChartPlugins,
      });
      document.getElementById("north-america-legend").innerHTML =
        northAmericaChart.generateLegend();
    }
    if ($("#north-america-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            data: [100, 50, 50],
            backgroundColor: ["#4B49AC", "#FFC100", "#248AFD"],
            borderColor: "rgba(0,0,0,0)",
          },
        ],
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
            borderWidth: 4,
          },
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="report-chart">');
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[0] +
              '"></div><p class="mb-0">Offline sales</p></div>'
          );
          text.push('<p class="mb-0">88333</p>');
          text.push("</div>");
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[1] +
              '"></div><p class="mb-0">Online sales</p></div>'
          );
          text.push('<p class="mb-0">66093</p>');
          text.push("</div>");
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[2] +
              '"></div><p class="mb-0">Returns</p></div>'
          );
          text.push('<p class="mb-0">39836</p>');
          text.push("</div>");
          text.push("</div>");
          return text.join("");
        },
      };
      var northAmericaChartPlugins = {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "500 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";

          var text = "90",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      };
      var northAmericaChartCanvas = $("#north-america-chart-dark")
        .get(0)
        .getContext("2d");
      var northAmericaChart = new Chart(northAmericaChartCanvas, {
        type: "doughnut",
        data: areaData,
        options: areaOptions,
        plugins: northAmericaChartPlugins,
      });
      document.getElementById("north-america-legend").innerHTML =
        northAmericaChart.generateLegend();
    }

    if ($("#south-america-chart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            data: [60, 70, 70],
            backgroundColor: ["#4B49AC", "#FFC100", "#248AFD"],
            borderColor: "rgba(0,0,0,0)",
          },
        ],
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
            borderWidth: 4,
          },
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="report-chart">');
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[0] +
              '"></div><p class="mb-0">Offline sales</p></div>'
          );
          text.push('<p class="mb-0">495343</p>');
          text.push("</div>");
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[1] +
              '"></div><p class="mb-0">Online sales</p></div>'
          );
          text.push('<p class="mb-0">630983</p>');
          text.push("</div>");
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[2] +
              '"></div><p class="mb-0">Returns</p></div>'
          );
          text.push('<p class="mb-0">290831</p>');
          text.push("</div>");
          text.push("</div>");
          return text.join("");
        },
      };
      var southAmericaChartPlugins = {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#000";

          var text = "76",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      };
      var southAmericaChartCanvas = $("#south-america-chart")
        .get(0)
        .getContext("2d");
      var southAmericaChart = new Chart(southAmericaChartCanvas, {
        type: "doughnut",
        data: areaData,
        options: areaOptions,
        plugins: southAmericaChartPlugins,
      });
      document.getElementById("south-america-legend").innerHTML =
        southAmericaChart.generateLegend();
    }
    if ($("#south-america-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            data: [60, 70, 70],
            backgroundColor: ["#4B49AC", "#FFC100", "#248AFD"],
            borderColor: "rgba(0,0,0,0)",
          },
        ],
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
            borderWidth: 4,
          },
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="report-chart">');
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[0] +
              '"></div><p class="mb-0">Offline sales</p></div>'
          );
          text.push('<p class="mb-0">495343</p>');
          text.push("</div>");
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[1] +
              '"></div><p class="mb-0">Online sales</p></div>'
          );
          text.push('<p class="mb-0">630983</p>');
          text.push("</div>");
          text.push(
            '<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' +
              chart.data.datasets[0].backgroundColor[2] +
              '"></div><p class="mb-0">Returns</p></div>'
          );
          text.push('<p class="mb-0">290831</p>');
          text.push("</div>");
          text.push("</div>");
          return text.join("");
        },
      };
      var southAmericaChartPlugins = {
        beforeDraw: function (chart) {
          var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;

          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";

          var text = "76",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
        },
      };
      var southAmericaChartCanvas = $("#south-america-chart-dark")
        .get(0)
        .getContext("2d");
      var southAmericaChart = new Chart(southAmericaChartCanvas, {
        type: "doughnut",
        data: areaData,
        options: areaOptions,
        plugins: southAmericaChartPlugins,
      });
      document.getElementById("south-america-legend").innerHTML =
        southAmericaChart.generateLegend();
    }

    function format(d) {
      // `d` is the original data object for the row
      return (
        '<table cellpadding="5" cellspacing="0" border="0" style="width:100%;">' +
        '<tr class="expanded-row">' +
        '<td colspan="8" class="row-bg"><div><div class="d-flex justify-content-between"><div class="cell-hilighted"><div class="d-flex mb-2"><div class="mr-2 min-width-cell"><p>Policy start date</p><h6>25/04/2020</h6></div><div class="min-width-cell"><p>Policy end date</p><h6>24/04/2021</h6></div></div><div class="d-flex"><div class="mr-2 min-width-cell"><p>Sum insured</p><h5>$26,000</h5></div><div class="min-width-cell"><p>Premium</p><h5>$1200</h5></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Quote no.</p><h6>Incs234</h6></div><div class="mr-2"><p>Vehicle Reg. No.</p><h6>KL-65-A-7004</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Policy number</p><h6>Incsq123456</h6></div><div class="mr-2"><p>Policy number</p><h6>Incsq123456</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-3 d-flex"><div class="highlighted-alpha"> A</div><div><p>Agent / Broker</p><h6>Abcd Enterprices</h6></div></div><div class="mr-2 d-flex"> <img src="../../images/faces/face5.jpg" alt="profile"/><div><p>Policy holder Name & ID Number</p><h6>Phillip Harris / 1234567</h6></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Branch</p><h6>Koramangala, Bangalore</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Channel</p><h6>Online</h6></div></div></div></div></td>'
      );
      "</tr>" + "</table>";
    }
    var table = $("#example").DataTable({
      ajax: "js/data.txt",
      columns: [
        { data: "Quote" },
        { data: "Product" },
        { data: "Business" },
        { data: "Policy" },
        { data: "Premium" },
        { data: "Status" },
        { data: "Updated" },
        {
          className: "details-control",
          orderable: false,
          data: null,
          defaultContent: "",
        },
      ],
      order: [[1, "asc"]],
      paging: false,
      ordering: true,
      info: false,
      filter: false,
      columnDefs: [
        {
          orderable: false,
          className: "select-checkbox",
          targets: 0,
        },
      ],
      select: {
        style: "os",
        selector: "td:first-child",
      },
    });
    $("#example tbody").on("click", "td.details-control", function () {
      var tr = $(this).closest("tr");
      var row = table.row(tr);

      if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass("shown");
      } else {
        // Open this row
        row.child(format(row.data())).show();
        tr.addClass("shown");
      }
    });
  });
})(jQuery);

calendar = new CalendarYvv("#calendar", moment().format("Y-M-D"), "Monday");
calendar.createCalendar();
calendar.diasResal = [1, 2, 3];

// background color of preselected dates

calendar.colorResal = "#28a7454d";

// text color of preselected dates

calendar.textResalt = "#28a745";

// background class

calendar.bg = "bg-dark";

// text color class

calendar.textColor = "text-white";

// class for normal buttons

calendar.btnH = "btn-outline-light";

// button class when hovering over

calendar.btnD = "btn-rounded-success";
