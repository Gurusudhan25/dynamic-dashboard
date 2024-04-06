import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css',
})
export class PieChartComponent {
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = ['Download Sales', 'In Store Sales', 'Mail Sales'];
  public pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
