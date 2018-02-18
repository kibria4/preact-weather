import { h, Component } from 'preact';
import './style.css';

export default class Header extends Component {
	render() {
		return (
      <header>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-logo">
              <h1>Instaweather</h1>
            </div>
            <div class="col-sm-6 col-icons">
            <ul class="list-inline pull-right text-right">
              <li>
                <a href="#">
                
                </a>
              </li>
              <li>
                <a href="#">
                
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </header>
		);
	}
}