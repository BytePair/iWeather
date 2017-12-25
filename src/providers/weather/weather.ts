import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

    apikey = "6dbdcafe4cbc6e3d";
    url;

    constructor(public httpClient: HttpClient) {
        this.url =  "http://api.wunderground.com/api/" + this.apikey + "/conditions/q/";
    }

    getWeather(city, state) {
        return this.httpClient.get(this.url + "/" + state + "/" + city + ".json");
    }

}
