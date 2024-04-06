import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { UploadDialogComponent } from '../../libs/upload-dialog/upload-dialog.component';
import { BarChartComponent } from '../../libs/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from '../../libs/charts/pie-chart/pie-chart.component';
import { LineChartComponent } from '../../libs/charts/line-chart/line-chart.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    MatButtonModule,
    MatIconModule,
    SideBarComponent,
    RouterOutlet,
    MatSidenavModule,
    MatDialogModule,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
  ],
  standalone: true,
})
export class DashboardComponent {
  isDashboard = true;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dRef = this.dialog.open(UploadDialogComponent, {
      width: '450px',
      disableClose: true,
    });

    dRef.afterClosed().subscribe((res) => {
      if (res.isDashboard) {
        this.isDashboard = true;
      }
    });
  }
}
