import React, { useEffect, useState } from 'react';


const WeatherCard = ({tempInfo}) => {
    const [weatherState, setWeatherState] = useState('');

    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        speed,
        name,
        country,
        sunset,
    } = tempInfo;

    useEffect(() => {
        if(weatherMood){
            switch (weatherMood) {
                case 'Clouds':
                setWeatherState('wi-cloudy');
                    break;
                case 'Haze':
                    setWeatherState('wi-fog');
                    break;
                    case 'Smoke':
                        setWeatherState('wi-smoke');
                        break;
                case 'Clear':
                    setWeatherState('wi-night-clear');
                    break;
                case 'Snow':
                        setWeatherState('wi-snow');
                        break;
                case 'Mist':
                        setWeatherState('wi-day-fog');
                        break;
            
                default:
                    break;
            }
        }
    }, [weatherMood]);
    

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
        {/* our temperature card */}
        <article className='widget'>
            <div className='weatherIcon'>
                <i className={`wi ${weatherState}`}></i>
            </div>
            <div className='weatherInfo'>
                <div className='temperature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='weatherCondition'>
                        {weatherMood}
                    </div>
                    <div className='place'>{name}, {country}</div>
                </div>
            </div>
            <div className='date'> {new Date().toLocaleString()} </div>

            {/* 4 column section */}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-sunset'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {timeStr} PM <br />
                            Sunset
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-humidity'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {humidity} <br />
                            Humidity
                        </p>
                    </div>
                </div>
                <div className='weather-extra-info'>
                <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-rain'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {pressure} <br />
                            Pressure
                        </p>
                    </div>
                    <div className='two-sided-section'>
                        <p>
                            <i className={'wi wi-strong-wind'}></i>
                        </p>
                        <p className='extra-info-leftside'>
                            {speed} <br />
                            Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
    </>
  )
}

export default WeatherCard;