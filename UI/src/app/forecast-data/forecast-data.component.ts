import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {AppFacade} from '../app.facade';

@Component({
  selector: 'app-forecast-data',
  templateUrl: './forecast-data.component.html',
  styleUrls: ['./forecast-data.component.css']
})

export class ForecastDataComponent implements OnInit {
  @Output() refreshData = new EventEmitter<boolean>();
  @Input() hourlyData;
  @Input() dailyData;

  constructor(private appFacade: AppFacade) { }

  ngOnInit() {}

  selectedData(selectedData: any): void {
    this.appFacade.selectedData = selectedData;
    this.refreshData.emit(true);
  }

  tabChange(tabId: any): void {
    if (tabId === 'today') {
      this.appFacade.selectedData = this.hourlyData[0];
    } else {
      this.appFacade.selectedData = this.dailyData[0];
    }
    this.refreshData.emit(true);
  }
}

