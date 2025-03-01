import React from 'react';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const Weather = () => {
  return (
    <div className="w-80 h-[450px] mt-20 border rounded-xl mx-auto bg-purple-600 flex flex-col justify-start items-center p-4">
      {/* Search Bar */}
      <div className="flex items-center space-x-3 mt-4">
        <div className="flex items-center border border-black rounded-3xl bg-white px-2 py-1 w-64">
          <input
            className="flex-grow outline-none px-2 py-1 text-black bg-transparent"
            type="text"
            placeholder="Enter Country Name"
          />
        </div>
        <button className="p-3 bg-white rounded-full hover:bg-gray-400 transition cursor-pointer">
          <img src={search_icon} alt="Search" className="w-5 h-5" />
        </button>
      </div>

      {/* Weather Icon */}
      <img className='w-48 h-48' src={clear_icon} alt="Weather" />

      {/* Temperature */}
      <div className="flex">
        <p className="font-bold text-3xl text-white font-mono">16°</p>
        <p className="font-bold text-2xl text-white mt-1">C</p>
      </div>

      {/* Humidity & Wind Speed */}
      <div className="flex justify-between space-x-8 mt-4">
        {/* Humidity */}
        <div className="flex items-center space-x-4 text-white">
          <img src={humidity_icon} alt="Humidity" className="w-8 h-6" />
          <div>
            <p className="text-lg font-bold">91%</p>
            <p className="text-sm">Humidity</p>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="flex items-center space-x-2 text-white">
          <img src={wind_icon} alt="Wind Speed" className="w-8 h-6" />
          <div>
            <p className="text-lg font-bold">3.1 Km/h</p>
            <p className="text-sm">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
