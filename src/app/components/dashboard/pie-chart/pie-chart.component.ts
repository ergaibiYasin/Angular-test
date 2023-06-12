import { Component } from '@angular/core';
import { Chart, registerables } from "chart.js";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  ngOnInit(): void {
    Chart.register(...registerables);

    const myChart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: ['red', 'blue', 'yellow']
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
            text: 'Pie Chart'
          }
        }
      }
    });
    
  }  
}
