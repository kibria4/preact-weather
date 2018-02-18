//Make HTTP requests easily with Axios. Allows promise-style code.
import axios from 'axios';

const apiKey = 'c8413dc39a56948004abf521e27ea290';
const units = 'metric';
const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const openWeatherApiUrl = 'weather?&appid=&units=metric';

export default class OpenWeatherAPI {
  getCityCurrentWeather(location) {
    var locationUrlEncoded = encodeURIComponent(location);
    var currentWeatherUrl = `${baseUrl}weather?appid=${apiKey}&units=metric&q=${locationUrlEncoded}`;
    
    return axios.get(currentWeatherUrl).then(res => {
      if(res.data.cod && res.message){
        throw new Error(res.message);
      } else {
        return res.data;
      }
    }, res => {
      throw new Error(res.message);
    });
  }
  
  getCityForecastWeather(location) {
    var locationUrlEncoded = encodeURIComponent(location);
    var weatherForecastUrl = `${baseUrl}forecast?appid=${apiKey}&units=metric&q=${locationUrlEncoded}`;
    
    return axios.get(weatherForecastUrl).then(res => {
      if(res.data.cod && res.message){
        throw new Error(res.message);
      } else {
        return res.data;
      }
    }, res => {
      throw new Error(res.message);
    });
    
  }
}