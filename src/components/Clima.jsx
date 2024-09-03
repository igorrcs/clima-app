import React, { useEffect, useState } from 'react';
import './Clima.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Clima = () => {
  const [climaData, setClimaData] = useState(null);
  const [city, setCity] = useState("");

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city == "") {
      alert("Digite o nome de uma Cidade!");
      return;

    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      const icon = allIcons[data.weather[0].icon] || clear_icon;

      setClimaData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error("Erro ao buscar dados do clima", error);
    }
  };

  useEffect(() => {
    search(city);
  }, []);

  return (
    <div className="clima">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <img
          src={search_icon}
          alt="Search"
          onClick={() => search(city)}
          style={{ cursor: "pointer" }}
        />
      </div>
      {climaData && (
        <>
          <img src={climaData.icon} alt="Clima Icon" className="clima-icon" />
          <p className="temperatura">{climaData.temperature}ºc</p>
          <p className="localizacao">{climaData.location}</p>
          <div className="clima-data">
            <div className="col">
              <img src={humidity_icon} alt="Umidade Icon" />
              <div>
                <p>{climaData.humidity}%</p>
                <span>Umidade</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="Vento Icon" />
              <div>
                <p>{climaData.windSpeed} Km/h</p>
                <span>Velocidade do Vento</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Clima;
