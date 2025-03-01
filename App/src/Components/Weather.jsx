import React from 'react';
import { useEffect, useState } from 'react';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {

    const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("London");

    const search = async (cityName)=>{
        try {
            const apiKey = "3d0bdfa8013cf1ecb390a26d489d8384"; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
        console.log("API Key:", apiKey);
        const response = await fetch(url);
        const data = await response.json();
  
        if (response.ok) {
          setWeather(data);
          console.log(data);
        } else {
          console.error("Error fetching data:", data.message);
        }
      } catch (error) {
        console.error("API fetch error:", error);
      }
    };

    useEffect(() => {
        search(city);
      },[]);

      const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          search(city);
        }
      };

  return (
    <div className="w-80 h-[450px] mt-20 border rounded-xl mx-auto bg-blue-600 flex flex-col justify-start items-center p-4">
      {/* Search Bar */}
      <div className="flex items-center space-x-3 mt-4">
        <div className="flex items-center border border-black rounded-3xl bg-white px-2 py-1 w-64">
          <input
            className="flex-grow outline-none px-2 py-1 text-black bg-transparent"
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
        <button onClick={() => search(city)}
         className="p-3 bg-white rounded-full hover:bg-gray-400 transition cursor-pointer">
          <img src={search_icon} alt="Search" className="w-5 h-5" />
        </button>
      </div>

      {/* Weather Icon */}
      <img className='w-48 h-48' src={clear_icon} alt="Weather" />

      {/* Temperature */}
      <div className="flex">
        <p className="font-bold text-5xl text-white font-mono">{weather ? `${Math.round(weather.main.temp)}°` : "Loading..."}</p>
        <p className="font-bold text-2xl text-white mt-1">C</p>
      </div>
        <p className='font-bold text-2xl text-white'>{weather ? weather.name : "City"}</p>
      
      {/* Humidity & Wind Speed */}

      {weather && weather.main ? (
      <div className="flex justify-between space-x-8 mt-4">
        {/* Humidity */}
        <div className="flex items-center space-x-4 text-white">
          <img src={humidity_icon} alt="Humidity" className="w-8 h-6" />
          <div>
            <p className="text-lg font-bold">{weather.main.humidity}%</p>
            <p className="text-sm">Humidity</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="flex items-center space-x-2 text-white">
          <img src={wind_icon} alt="Wind Speed" className="w-8 h-6" />
          <div>
            <p className="text-lg font-bold">{weather.wind.speed} Km/h</p>
            <p className="text-sm">Wind Speed</p>
          </div>
        </div>
      </div>
      ) : (
        <p className="text-white mt-4">Fetching weather...</p>
      )}
    </div>
  );
};

export default Weather;
