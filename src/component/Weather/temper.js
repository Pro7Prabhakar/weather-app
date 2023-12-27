//  https://api.openweathermap.org/data/2.5/weather?q=pakur&appid=5f22f622775876be4cef828a3298b0fd 

import React, { useEffect, useState } from 'react';
import './style.css';
import WeatherCard from './weatherCard';

const Temper = () => {
    const [searchValue, setSearchValue] = useState('pakur');
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherinfo = async() => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=5f22f622775876be4cef828a3298b0fd`;

            let res = await fetch(url);
            let data = await res.json();
            
            const {temp, humidity, pressure } = data.main;
            const {main : weatherMood} = data.weather[0];
            const {speed} = data.wind;
            const {country, sunset} = data.sys;
            const {name} = data;
            // console.log(temp, humidity, pressure, weatherMood, speed);
            
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                speed,
                name,
                country,
                sunset,
            };
            setTempInfo(myNewWeatherInfo);
            
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => { 
        getWeatherinfo();
    });

  return (
    <>
        <div className='wrap'>
            <div className='search'>
                <input type="search" 
                placeholder='search ... ' 
                id='search' 
                autoFocus 
                className='searchTerm' 
                value={ searchValue } 
                onChange={(e) => setSearchValue(e.target.value)} />

                <button className='searchButton' type='button' onClick={getWeatherinfo}>Search
                </button>
            </div>
        </div>
        {/* our temperature card */}
        <WeatherCard tempInfo = {tempInfo}/>        
    </>
  );
};

export default Temper;