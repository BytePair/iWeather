import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
    constructor(
        public navCtrl: NavController, 
        private weatherProvider: WeatherProvider,
        private storage: Storage) {
    }

    // fires when componenet is loaded (ngOnInit)
    ionViewWillEnter() {

        // get value of location from ionic storage
        this.storage.get('location').then((val) => {
            if (val != null) {
                this.location = JSON.parse(val);
            } else {
                this.location = {
                    city: "Miami",
                    state: "FL"
                }
            }
            // returns an observable
            this.weatherProvider.getWeather(this.location.city, this.location.state).
            subscribe(weather => {
                let tempWeather:any = weather;
                this.weather = tempWeather.current_observation;
            })
        });

    }

}
