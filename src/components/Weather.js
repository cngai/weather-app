import React from "react";

//kelvin-to-fahrenheit npm package
const kelvinToFahrenheit = require('kelvin-to-fahrenheit');

//uppercase first character
var ucfirst = require('ucfirst');

const Weather = props => (
	<div className="weather__info">
		{ 
		 props.city && props.country && <p className="weather__key"> Location: 
		 	<span className="weather__value"> { props.city }, { props.country } </span>
		 </p>
		}
		{ 
		 props.temperature && <p className="weather__key"> Temperature: 
		 	<span className="weather__value"> { kelvinToFahrenheit(props.temperature) } °F</span>
		 </p>
		}
		{ 
		 props.humidity && <p className="weather__key"> Humidity: 
		 	<span className="weather__value"> { props.humidity }% </span>
		 </p>
		}
		{
		 props.description && <p className="weather__key"> Conditions: 
		 	<span className="weather__value"> { ucfirst(props.description) } </span>
		 </p>
		}
		{
		 props.error && <p className="weather__error"> { props.error } </p>
		}
	</div>
);

export default Weather;