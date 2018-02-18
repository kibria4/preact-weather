import { h, Component } from 'preact';
import './style.css';

const yearDate = new Date().getFullYear();

export default class Footer extends Component {
	render() {
		return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-copyright">
              <p>&copy; Instaweather {yearDate}.</p>
            </div>
            <div class="col-sm-6 col-links">
            <ul class="list-inline pull-right text-right">
              <li>
                <a href="#">
                Terms
                </a>
              </li>
              <li>
                <a href="#">
                Privacy
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </footer>
		);
	}
}