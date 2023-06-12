import { Component } from '@angular/core';
import { Chart, registerables } from "chart.js";

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.scss']
})
export class StackedBarChartComponent {
  stackedBarChart!: Chart;


  ngOnInit(): void {
    Chart.register(...registerables);

    this.generateStackedBarChart();
  }

  generateStackedBarChart() {
    const chartData = {
      labels: ['Category 1', 'Category 2', 'Category 3'],
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: '#ff6384',
          data: [10, 20, 30]
        },
        {
          label: 'Dataset 2',
          backgroundColor: '#36a2eb',
          data: [15, 25, 35]
        },
        {
          label: 'Dataset 3',
          backgroundColor: '#ffce56',
          data: [5, 15, 25]
        }
      ]
    };

    const chartOptions = {
      responsive: true,
      scales: {
        x: { stacked: true },
        y: { stacked: true }
      }
    };

    this.stackedBarChart = new Chart('stackBarChart', {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }

}
