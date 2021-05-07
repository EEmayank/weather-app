export default function WeatherCard ({weatherData}) {
    

    if(weatherData) {
        let iconURL = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
        return (
            <div className="weathercard-container">
                <div className="weathercard">
                    <div className="locationandicon-container">
                        <div className="location-container">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                {weatherData.name}
                            </span>								
                        </div>
                        <div className="weathericon-container">
                            <img src={iconURL} alt="icon" />
                        </div>
                    </div>
                        
                    <div className="alltemp-container">
                        <div className="weathertype">
                            {weatherData.weather[0].main}
                        </div>
                        <div className="temp-container">
                            {(weatherData.main.temp-273.15).toFixed(1)}°C
                        </div>
                        <div className="minmaxtemp-container">
                            &#8595;{(weatherData.main.temp_min-273.15).toFixed(1)}°C
                            &nbsp;&nbsp;&nbsp;
                            &#8593;{(weatherData.main.temp_max-273.15).toFixed(1)}°C
                        </div>
                    </div>    
                    
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="weathercard-container">
                <div className="weathercard">
                    <div className="location-container">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        </span>								
                    </div>
                </div>
            </div>
        )
    }
}