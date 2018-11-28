import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { ServiceWeatherService } from '../service-weather.service'
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  cityName; today; jstoday; weatherData; temp; forcast; weathr;
  dayOfWeek = []; timestamp; days; date; min; max; tabWeather = []; weather = [];
  myDate: any;
  constructor(public WeatherService: ServiceWeatherService) { }

  ngOnInit() {
    this.cityName = 'Tunis';
    this.searchCity(this.cityName);
    this.getForcast(this.cityName);
    this.today = new Date();
    this.jstoday = '';
    this.jstoday = formatDate(this.today, 'hh:mm:ss a', 'en-TN');
    console.log(this.jstoday);
  }

  public searchCity(cityName) {
    this.WeatherService.searchCity(this.cityName).subscribe(res => {
      this.weatherData = res.json();
      console.log(this.weatherData);
      this.temp = Math.floor((this.weatherData.main.temp) - 273.15);
      this.min = Math.floor((this.weatherData.main.temp_min) - 273.15);
      this.max = Math.floor((this.weatherData.main.temp_max) - 273.15);
      for (var i = 0; i < this.weatherData.weather.length; i++) {
        this.weathr = this.weatherData.weather[i];

      }

    })

  }
  public getForcast(cityName) {
    this.WeatherService.getForcast(this.cityName).subscribe(result => {
      this.forcast = result.json().list;
      console.log(this.forcast);

      for (var i = 0; i < this.forcast.length; i++) {
        this.timestamp = this.forcast[i].dt;
        this.date = new Date(this.timestamp * 1000);
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.dayOfWeek[i] = this.days[this.date.getDay()];
        this.tabWeather[i] = this.forcast[i].weather;


        console.log(this.dayOfWeek);
      }
    })
  }
  public convertDate(myDate) {
    this.today = this.myDate;
    this.jstoday = '';
    this.jstoday = formatDate(this.today, 'hh:mm:ss a', 'en-US');
    return this.jstoday;
    console.log(this.jstoday);

  }
}






