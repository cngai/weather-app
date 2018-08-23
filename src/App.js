import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

//OWM API
const API_KEY = "dcdedbc65b36fc24ea047e41eca5785c";

//initialize component
class App extends React.Component {
  getWeather = async (e) => {
    //prevent default behavior
    e.preventDefault();

    const city = e.target.elements.name.city.value;   //input of city
    const country = e.target.elements.name.country.value; //input of country

    //make api call
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    //convert api_call to JSON
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;