import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';

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
    MatButtonModule,
  ],
  standalone: true,
})
export class DashboardComponent {
  isDashboard = false;
}
