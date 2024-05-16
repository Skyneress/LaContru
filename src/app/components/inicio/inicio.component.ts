import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WeatherService } from '../../services/openweather.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(
      data => {
        this.weatherData = data;
        console.log(data); // Verifica los datos en la consola
      },
      error => {
        console.error('Error al obtener datos del clima', error);
      }
    );
  }

  getWeatherIconUrl(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  }

}
