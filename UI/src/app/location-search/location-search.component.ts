import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppService} from '../app-service.service';
import {AppFacade} from '../app.facade';
import {Location} from '../references';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})

export class LocationSearchComponent implements OnInit {
  @Output() locationSearch = new EventEmitter<boolean>();
  location = '';
  currentWeather = {};
  locationDetails: Location;
  loading = false;
  constructor(private appService: AppService, private appFacade: AppFacade) { }

  ngOnInit() {
    this.appService.getIpLocation().subscribe((rsp) => {
      this.locationDetails = this.appFacade.locationDetails;
      this.location = this.locationDetails.city;
      this.appService.getWeatherInfo(this.locationDetails.latitude, this.locationDetails.longitude).subscribe((resp) => {
        this.currentWeather = this.appFacade.currentWeather;
        this.locationSearch.emit(true);
      });
    });
  }

  submit(city: string): void {
    this.loading = true;
    this.appService.getAddress(city).subscribe((rsp) => {
      this.locationDetails = this.appFacade.locationDetails;
      this.location = this.locationDetails.city;
      this.appService.getWeatherInfo(this.locationDetails.latitude, this.locationDetails.longitude).subscribe((resp) => {
        this.currentWeather = this.appFacade.currentWeather;
        this.locationSearch.emit(true);
        this.loading = false;
      });
    });
  }
}
