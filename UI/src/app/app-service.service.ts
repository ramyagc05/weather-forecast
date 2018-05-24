import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AppFacade} from './app.facade';

@Injectable()
export class AppService {

  constructor( private http: HttpClient, private appFacade: AppFacade) {
  }

  getIpLocation(): Observable<any> {
    const ipLocationUrl = 'https://freegeoip.net/json/';
    return this.http.get(ipLocationUrl).pipe(map(res => {
      this.appFacade.pplLocationDetailsFromIP(res);
    }));
  }

  getAddress(city): Observable <any> {
    const url = `${environment.requestUrl}/api/getLocationGeoCodes/${city}`;
    return this.http.get(url).pipe(map(res => {
      // const rsp = res.json();
      this.appFacade.pplLocationDetailsFromCity(res[0]);
    }));
  }

  getWeatherInfo(latitude: any, longitude: any): Observable<any> {
    const weatherUrl  = `${environment.requestUrl}/api/getWeatherForLocation/${latitude}/${longitude}`;
    return this.http.get(weatherUrl).pipe(map(res => {
      this.appFacade.pplWeatherData(res);
    },
    err=> {console.log(err);}
  ));
  }
}
