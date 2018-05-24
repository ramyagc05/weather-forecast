import {Injectable} from '@angular/core';
import {Location} from './references';

@Injectable()
export class AppFacade {
  weatherData: Array<any>;
  fullWeatherData: {};
  locationDetails: Location;
  currentWeather: {};
  hourlyData = [];
  selectedData: any;

  constructor() {}

  pplLocationDetailsFromIP(obj: any): void {
    this.locationDetails = new Location(obj);
  }

  pplWeatherData(obj: any): void {
    this.weatherData = [];
    this.fullWeatherData = obj;
    this.hourlyData = obj[0].hourly.data;
    this.currentWeather = obj[0].currently;
    obj.forEach(item => {
      this.weatherData.push(item.daily.data[0]);
    });

    if (this.selectedData) {
      if (this.selectedData.temperature) {
        this.selectedData = this.hourlyData[0];
      } else {
        this.selectedData = this.weatherData[0];
      }
    } else {
      this.selectedData = this.hourlyData[0];
    }
  }

  pplLocationDetailsFromCity(obj: any): void {
    this.locationDetails = new Location({});
    this.locationDetails['latitude'] = obj.geometry.location.lat;
    this.locationDetails['longitude'] = obj.geometry.location.lng;
    const formAddrss = obj.formatted_address;
    const sep = formAddrss.search(',');
    this.locationDetails['city'] = formAddrss.substr(0, sep);
    this.locationDetails['region_code'] = formAddrss.substr(sep + 2, 2);
  }
}
