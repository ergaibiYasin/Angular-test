import { Component } from '@angular/core';
import { Chart, registerables } from "chart.js";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  ngOnInit(): void {
    const myChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Data 1',
          data: [10, 20, 30, 25, 40, 35],
          borderColor: 'blue',
          fill: false
        }, {
          label: 'Data 2',
          data: [5, 15, 25, 20, 35, 30],
          borderColor: 'red',
          fill: false
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Line Chart'
          }
        }
      }
    });
  }

}
