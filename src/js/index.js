import "./navbar";

feather.replace();

const ctx = document.getElementById("sales_chart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "# of Sales",
        data: [12, 19, 3, 5, 2, 3, 15, 20, 10, 30, 11, 21],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          '#1115'
        ],
        borderWidth: 1,
        tension: 0.5
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => {
            return value + 'K $'
          },
          
        }
      },
    },
  },
});

/**
 * trigger all bootstrap tooltip
 */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'))
tooltipTriggerList.map(function (tooltipTriggerEl) {
  if(!tooltipTriggerEl.hasAttribute('data-bs-toggle')) {
    tooltipTriggerEl.setAttribute('data-bs-toggle', 'tooltip');
    tooltipTriggerEl.setAttribute('data-bs-placement', 'top');
  }
  return new bootstrap.Tooltip(tooltipTriggerEl)
})






