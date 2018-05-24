import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { ForecastDataComponent } from './forecast-data/forecast-data.component';
import { ForecastDetailsComponent } from './forecast-details/forecast-details.component';
import { AppService } from './app-service.service';
import { AppFacade } from './app.facade';
import { TabsModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataConverterPipe } from './data-converter.pipe';
import { LoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    LocationSearchComponent,
    ForecastDataComponent,
    ForecastDetailsComponent,
    DataConverterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LoadingModule,
    TabsModule.forRoot()
  ],
  providers: [AppService, AppFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
