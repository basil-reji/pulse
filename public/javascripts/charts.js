var xValues = ['01-01-2022','10-01-2022','16-01-2022','21-01-2022','27-01-2022'];
var yValues = [7.2,7.1,6.9,7.3,7.5];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(48, 255, 90,1.0)",
      borderColor: "rgba(48, 255, 90,0.1)",
      data: yValues
    }]
  },
  options: {
    title: {
        display: true,
        text: 'pH'
    },
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:14}}],
    }
  }
});


var xValues = ['01-01-2022','10-01-2022','16-01-2022','21-01-2022','27-01-2022'];
var yValues = [67,69,60,65,50];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(48, 255, 90,1.0)",
      borderColor: "rgba(48, 255, 90,0.1)",
      data: yValues
    }]
  },
  options: {
    title: {
        display: true,
        text: 'Moisture'
    },
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:100}}],
    }
  }
});


var xValues = ['01-01-2022','10-01-2022','16-01-2022','21-01-2022','27-01-2022'];
var yValues = [80,75,78,85,77];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(48, 255, 90,1.0)",
      borderColor: "rgba(48, 255, 90,0.1)",
      data: yValues
    }]
  },
  options: {
    title: {
        display: true,
        text: 'Conductivity'
    },
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:100}}],
    }
  }
});


var xValues = ['01-01-2022','10-01-2022','16-01-2022','21-01-2022','27-01-2022'];
var yValues = [27,25,24,26,28];

new Chart("myChart4", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(48, 255, 90,1.0)",
      borderColor: "rgba(48, 255, 90,0.1)",
      data: yValues
    }]
  },
  options: {
    title: {
        display: true,
        text: 'Temperature'
    },
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 10, max:50}}],
    }
  }
});


var xValues = ['01-01-2022','10-01-2022','16-01-2022','21-01-2022','27-01-2022'];
var yValues = [60,55,58,65,76];

new Chart("myChart5", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(48, 255, 90,1.0)",
      borderColor: "rgba(48, 255, 90,0.1)",
      data: yValues
    }]
  },
  options: {
    title: {
        display: true,
        text: 'Humidity'
    },
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:100}}],
    }
  }
});