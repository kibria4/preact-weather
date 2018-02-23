//Make HTTP requests easily with Axios. Allows promise-style code.
import axios from 'axios';

const apiKey = 'c8413dc39a56948004abf521e27ea290';
const units = 'metric';
const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const openWeatherApiUrl = 'weather?&appid=&units=metric';

class OpenWeather {

  constructor(){

  }

  /*
    Sample response:

    {
   "coord":{
      "lon":-0.13,
      "lat":51.51
   },
   "weather":[
      {
         "id":800,
         "main":"Clear",
         "description":"clear sky",
         "icon":"01n"
      }
   ],
   "base":"stations",
   "main":{
      "temp":0.72,
      "pressure":1023,
      "humidity":59,
      "temp_min":-1,
      "temp_max":3
   },
   "visibility":10000,
   "wind":{
      "speed":2.6,
      "deg":60
   },
   "clouds":{
      "all":0
   },
   "dt":1519327200,
   "sys":{
      "type":1,
      "id":5091,
      "message":0.0046,
      "country":"GB",
      "sunrise":1519282738,
      "sunset":1519320579
   },
   "id":2643743,
   "name":"London",
   "cod":200
}
  */

  getCityCurrentWeather = (location) => {

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
  };


  /*
  Sample response: {"city":{"id":2643743,"name":"London","coord":{"lon":-0.1277,"lat":51.5073},"country":"GB","population":1000000},"cod":"200","message":5.1759855,"cnt":5,"list":[{"dt":1519300800,"temp":{"day":-0.23,"min":-0.48,"max":-0.23,"night":-0.48,"eve":-0.23,"morn":-0.23},"pressure":1030.08,"humidity":77,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01n"}],"speed":3.51,"deg":81,"clouds":0},{"dt":1519387200,"temp":{"day":3.81,"min":-0.54,"max":3.81,"night":-0.54,"eve":1.02,"morn":1.1},"pressure":1028.53,"humidity":76,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":4.76,"deg":92,"clouds":32,"snow":0.06},{"dt":1519473600,"temp":{"day":3.48,"min":-1.8,"max":3.65,"night":1.01,"eve":1.86,"morn":-1.8},"pressure":1029.36,"humidity":67,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":6.91,"deg":91,"clouds":0},{"dt":1519560000,"temp":{"day":2.01,"min":-3.73,"max":2.36,"night":-3.73,"eve":-0.25,"morn":-1.32},"pressure":1036.76,"humidity":61,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":6.36,"deg":102,"clouds":0},{"dt":1519646400,"temp":{"day":1.58,"min":-4.57,"max":1.58,"night":-4.54,"eve":-1.27,"morn":-4.57},"pressure":1035.7,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":2.75,"deg":103,"clouds":62,"snow":0.17}]}
  */
  getCityForecastWeather = (location) => {
    var locationUrlEncoded = encodeURIComponent(location);
    var weatherForecastUrl = `${baseUrl}forecast/daily?appid=${apiKey}&units=metric&cnt=5&q=${locationUrlEncoded}`;

    return axios.get(weatherForecastUrl).then(res => {
      if(res.data.cod && res.message){
        throw new Error(res.message);
      } else {
        return res.data;
      }
    }, res => {
      throw new Error(res.message);
    });

  };
}

export { OpenWeather as default };
