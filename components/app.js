// import './style';
import { h, Component } from 'preact';

import {$,jQuery} from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './header';
import Weather from './weather';
import Footer from './footer';

export default class App extends Component {
  
  constructor() {
    super();
  }
	render() {
		return (
			<div>
				<Header />
        <Weather />
        <Footer />
			</div>
		);
	}
}