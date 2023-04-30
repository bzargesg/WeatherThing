import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;
  cityName: string = 'Colorado Springs';

  ngOnInit(): void {
    this.getWeatherData('Colorado Springs');
    this.cityName = '';
  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }

  title = 'weatherThing';

  onSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
}
