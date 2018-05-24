import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.css']
})

export class ForecastDetailsComponent {
  @Input() dayData;
  constructor() { }
}
