import React from 'react';
import './App.scss';
import Form from './components/Form';
import Weather from './components/Weather';
import Backgound from './components/Background';

const API_KEY = 'db88615648a49ecbd4abb035c15f3f88';
const initialState = {
  city: "City",
  temperature: "0",
  description: "",
  error: ""
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
      console.log('hello', data)
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
      <div>
        <Backgound weather={this.state.description}>
          <Form getWeather={this.getWeather} />
          <Weather 
            city={this.state.city}
            temperature={this.state.temperature}
            description={this.state.description}
            error={this.state.error}
          />
        </Backgound>
      </div>
    )
  }
}

export default App;
