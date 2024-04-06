import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss'],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    BaseChartDirective,
    MatCardModule
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  standalone: true,
})
export class DashboardDetailComponent {
  scores1 = [
    { over: 1, ball: 4, score: 6, },
    { over: 2, ball: 2, score: 12, },
    { over: 3, ball: 5, score: 18, },
    { over: 4, ball: 1, score: 28, },
    { over: 5, ball: 3, score: 34, },
    { over: 6, ball: 3, score: 40, },
    { over: 7, ball: 2, score: 40, },
    { over: 8, ball: 4, score: 55, },
    { over: 9, ball: 5, score: 67, },
    { over: 10, ball: 1, score: 82, },
  ];


  scores2 = [
    { over: 1, ball: 4, score: 7, },
    { over: 2, ball: 2, score: 14, },
    { over: 3, ball: 5, score: 16, },
    { over: 4, ball: 1, score: 21, },
    { over: 5, ball: 3, score: 36, },
    { over: 6, ball: 3, score: 40, },
    { over: 7, ball: 2, score: 49, },
    { over: 8, ball: 4, score: 60, },
    { over: 9, ball: 5, score: 70, },
    { over: 10, ball: 1, score: 80, },
  ];

  score1 = this.scores1.map((val) => val.score);
  score2 = this.scores2.map((val) => val.score);


  overs1 = this.scores1.map((val) => val.over);


  public lineChartData: ChartConfiguration<'line'>['data'] = {
    xLabels: this.overs1,
    datasets: [
      {
        data: this.score1,
        label: 'Csk Runs',
        pointStyle: 'line',
      },
      {
        data: this.score2,
        label: 'Rcb Runs',
        pointStyle: 'line'
      },
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    
  };
}
