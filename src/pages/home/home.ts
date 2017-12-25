import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import the service provider
import { WeatherProvider } from '../../providers/weather/weather';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {

    weather: any;
    location: {
        city: string,
        state: string
    };

    // inject the weather provider/service
    constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

    }

    // fires when componenet is loaded (ngOnInit)
    ionViewWillEnter() {
        this.location = {
            city: "Miami",
            state: "FL"
        }

        // returns an observable
        this.weatherProvider.getWeather(this.location.city, this.location.state).
            subscribe(weather => {
                this.weather = weather.current_observation;
            })
    }

}
