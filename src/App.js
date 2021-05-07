import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

import {useState} from 'react'

function App() {

  const [weatherData, setWeatherData] = useState(null)

  const handleWeatherData = (city) => {
    const API = 'add your api key'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1c486e25640fe14f78823554535c90b`
    fetch (url)
    .then ((resp) => {
      return resp.json();
    })
    .then ((data) => {
      if(data.cod == "200") {
        setWeatherData(data)
        console.log(data);
      }
      else {
        setWeatherData(null)
      }
    })
    .catch (err => {
      console.log(err);
      setWeatherData(null)
    })
  }

  return (
    <div className="App body">
      <div className="container">
        <SearchBar handleWeatherData={handleWeatherData}/>
        <WeatherCard weatherData={weatherData}/> 
      </div>
    </div>
  );
}

export default App;
