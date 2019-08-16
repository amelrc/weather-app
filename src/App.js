import React from 'react';
import './App.scss';
import Form from './components/Form';
import Weather from './components/Weather';
import Backgound from './components/Background';

import Clear from './img/Sun.png';
import Rain from './img/Rain.jpeg';
import Clouds from './img/Cloud.jpg';
import Snow from './img/Snow.jpg';
import Drizzle from './img/Drizzle.png';
import Thunderstorm from './img/Thunder.png';

const API_KEY = 'db88615648a49ecbd4abb035c15f3f88';
const initialState = {
  city: "City",
  temperature: "0",
  description: "Clouds",
  error: "",
}

const imageBG = {
  Clear: [Clear, "clear"],
  Rain: [Rain, "rain"],
  Clouds: [Clouds, "clouds"],
  Snow: [Snow, "snow"],
  Drizzle: [Drizzle, "drizzle"],
  Thunderstorm: [Thunderstorm, "thunderstorm"],
}

class App extends React.Component {
  state = {...initialState}

 componentDidMount() {
    this.getWeather(undefined, 'the hague');
  }

  getWeather = (e, givinCity) => {
    e && e.preventDefault();
    const city = e ? e.target.elements.city.value : givinCity;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then((data)=> data.json())
    .then((data)=> {
      !data.message ?
        this.setState({
          city: data.name,
          temperature: Math.round(data.main.temp),
          description: data.weather[0].main,
          error: ''
        })
       : this.setState({...initialState, error: data.message})
    })
  }

  
  render() {
    return (
      <div className={`background ${imageBG[`${this.state.description}`][1]}`}>
        <Backgound image={`url(${imageBG[this.state.description][0]})`}>
          <Weather 
            className={`${imageBG[`${this.state.description}`][1]}`}
            city={this.state.city}
            temperature={this.state.temperature}
            description={this.state.description}
            error={this.state.error}
          />
          <Form getWeather={this.getWeather} />
        </Backgound>
      </div>
    )
  }
}

export default App;
