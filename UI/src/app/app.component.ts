import { Component } from '@angular/core';
import { AppFacade } from './app.facade';
import { AppService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loading = false;
  dayData: any;
  hourlyData: any;
  dailyData: any;

  constructor(private appService: AppService, private appFacade: AppFacade) {
    this.loading = true;
  }

  refreshData(): void {
    this.dayData = this.appFacade.selectedData;
  }

  updateData(): void {
    this.dayData = this.appFacade.selectedData;
    this.hourlyData = this.appFacade.hourlyData;
    this.dailyData = this.appFacade.weatherData;
    this.loading = false;
  }
}
