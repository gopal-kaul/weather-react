import Weather from './components/weather'
import './App.css';
import Form from './components/form';
import React from 'react';
const APIkey = "f2683eb6cc65be3cdfca83ee2d73e421";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      max: undefined,
      min: undefined,
      error: false,
    };
    this.getWeather();

  }

  getWeather = async e => {
    e.preventDefault();
    if (e.target.city.value && e.target.country.value) {
      let city = e.target.city.value;
      let country = e.target.country.value;
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`);
      const resp = await api_call.json();
      console.log(resp);
      this.setState({
        city: resp.name,
        country: resp.sys.country,
        celsius: Math.floor(resp.main.temp - 273.16),
        max: Math.floor(resp.main.temp_max - 273.16),
        min: Math.floor(resp.main.temp_min - 273.16),
        description: resp.weather[0].description,
        icon: resp.weather[0].id,
      });
    }
    else {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather city={this.state.city} country={this.state.country} celsius={this.state.celsius} max={this.state.max} icon={this.state.icon} min={this.state.min} description={this.state.description} />
      </div>
    );
  }
}


export default App;
