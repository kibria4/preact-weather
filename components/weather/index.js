import { h, Component } from 'preact';
import './style.css';
import OpenWeatherAPI from '../../api/openWeather';


export default class Weather extends Component {
  getInitialState(){
    return { isLoading: false };
  }
  handleSearch(location){
    
    var that = this;
    
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      forecast: undefined
    });
    
  }
  
	render() {
		return (
      <main>
        <section class="weather-search">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-weather-search">
                <form class="">
                  <div class="form-group">
                    <input type="text" autofocus="autofocus" class="form-control" id="weathercity" placeholder="Enter the City you want to know the weather about..." />
                    
                  </div>
                  <button type="submit" class="btn btn-default pull-right">Search</button>
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