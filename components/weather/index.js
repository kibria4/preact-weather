import { h, Component } from 'preact';
import './style.css';
import OpenWeather from '../../api/openWeather';
import axios from 'axios';


export default class Weather extends Component {
  //Initial setup
  constructor(props) {
    super(props);
    this.state = {city: '', isLoading: false};
  }

  //initial values
  getInitialState(){
    return { isLoading: false };
  }

  //As a user enters text in to the textfield, update the city variable before submission
  handleSearchChange = (e) =>{
    this.setState({city: e.target.value});
  }

  handleSearch = (e) => {
    //Prevent page refresh on form submission
    e.preventDefault();
    //Set state to display info while fetching data
    this.setState({
      isLoading: true,
      locationEntered: true,
      err: null
    });

    //Get location from state, which has been updated every time text field is changed per character
    var location = this.state.city;

    //Create new instance of OpenWeather API Class
    var ow = new OpenWeather();

    //Current weather info
    ow.getCityCurrentWeather(location).then(response => {
      //Handle json response for current weather
      this.parseCurrentWeatherResponse(response);

      //5 day forecast weather info
      ow.getCityForecastWeather(location).then(response => {
        //Handle json response for 5 day forecast weather
        this.parseFutureWeatherResponse(response);

        //set post api fetch state of some elements
        this.setState({
          isLoading: false
        });

      }, response => {
        //Display error
        this.setState({
          isLoading: false,
          err: response
        });
      }); //5 day forecast weather info


    }, response => {
      //Display error
      this.setState({
        isLoading: false,
        err: response
      });
    });//current weather info

  }

  //Current weather forecast
  parseCurrentWeatherResponse = (res) => {
    var tempName = '';
    var tempDesc = '';
    var tempHumidity = res.main.humidity;
    var tempIcon = '';

    // console.log(res.weather);

    for (var i in res.weather){
      // console.log(res.weather[i]);
      tempName = res.weather[i].main;
      tempDesc = res.weather[i].description;
      tempIcon = res.weather[i].icon;
    }

    this.setState({
      tempName: tempName,
      tempDesc: tempDesc,
      tempIcon: tempIcon,
      tempHumidity: tempHumidity
    });
  }

  //5 day weather forecast
  parseFutureWeatherResponse = (res) => {
    console.log(res);
  }

	render() {

    var {isLoading, locationEntered, err} = this.state;

    //Display reset button based on state of weather result
    function renderReset(){
      if(locationEntered){
        return <button type="reset" class="btn btn-default pull-right">Reset</button>
      } else {
        return <button type="reset" className="hidden">Reset</button>
      }
    }

    //Display a "loading" message while calling API
    function renderMessage (){
      if(isLoading){
        return <h3 class="text-center">Fetching weather...</h3>;
      } else {
        return;
      }
      // else if(temp && location){
      //   // return <WeatherMessage location={location} temp={temp} />
      // }
    }

		return (
      <main>
        <section class="weather-search">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-weather-search">
                <form class="" onSubmit={this.handleSearch}>
                  <div class="form-group">
                    <input type="text" autofocus="autofocus" onChange={this.handleSearchChange} value={this.state.city} class="form-control" id="weathercity" placeholder="Enter the City you want to know the weather about..." />
                  </div>
                  {renderReset()}
                  <button type="submit" class="hidden">Search</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section class="weather-info">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-summary text-center">
              {renderMessage()}
                <img src={`http://openweathermap.org/img/w/${this.state.tempIcon}.png`} alt="" />
                <h1>{this.state.tempName}</h1>
                <p>{this.state.tempDesc}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-xs-12 col-weather-map">
                <img src="//placehold.it/1200x300" alt="" class="img-responsive"/>
              </div>
              <div class="col-sm-6 col-xs-12 col-weather-info">
                <div class="row row-forecast">
                  <div class="col-xs-12 col-forecast">
                    <img src="//placehold.it/1200x200" alt="" class="img-responsive"/>
                  </div>
                </div>
                <div class="row row-other-info">
                  <div class="col-xs-6 col-humidity">
                    <div class="panel panel-default">
                      <div class="panel-heading">Humidity</div>
                      <div class="panel-body">
                        Humidity Level is ...
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-6 col-uv-index">
                    <div class="panel panel-default">
                      <div class="panel-heading">UV Index</div>
                      <div class="panel-body">
                        UV Index Level is ...
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-btn-map">
                  <div class="col-xs-12 col-btn-map">
                    <img src="//placehold.it/770x50" alt="" class="img-responsive"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
		);
	}
}
