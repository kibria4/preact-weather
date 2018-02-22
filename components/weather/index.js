import { h, Component } from 'preact';
import './style.css';
import OpenWeather from '../../api/openWeather';
import axios from 'axios';


export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {city: ''};
    this.handleSearch = this.handleSearch.bind(this);
  }

  getInitialState(){
    return { isLoading: false };
  }

  handleSearchChange = (e) =>{
    this.setState({city: e.target.value});
  }

  handleSearch = (e) => {
    e.preventDefault();
    var that = this;
    var location = this.state.city;
    console.log('handleSearch initiated! Value submitted is ' + location);
    var ow = new OpenWeather();
    ow.getCityCurrentWeather(location).then(response => {
      this.parseResponse(response);
    }, response => {
      alert(response);
    });
  }

  parseResponse = (parsedJson) => {
    console.log(JSON.stringify(parsedJson));
  }

	render() {
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
                  <button type="submit" class="hidden">Search</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section class="weather-info">
          <div class="container">
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
