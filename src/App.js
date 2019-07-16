import React from 'react';
import './App.scss';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'db88615648a49ecbd4abb035c15f3f88';

class App extends React.Component {
  state = {
    city: '',
    temperature: '',
    description:'',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city) {
      console.log(data);
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].main,
        error: ''
      })
    }
    else {
      this.setState({
        city: "City",
        temperature: "Temperature",
        description: "",
        error: "Please, type the name of a city"
      })
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello Weather</h1>
        <Form getWeather={this.getWeather} />
        <Weather 
          city={this.state.city}
          temperature={this.state.temperature}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
