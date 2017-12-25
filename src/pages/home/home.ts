import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import the service provider
import { WeatherProvider } from '../../providers/weather/weather';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

    export class HomePage {

    // inject the weather provider/service
    constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

    }

}
