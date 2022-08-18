import { useEffect, useState } from "react";
import axios from "axios";
import {currentWeather} from "./redux/weatherData";
import NavbarComponent from "./components/NavbarComponent"


import "./App.css";
import WeatherComponent from "./components/WeatherComponent";

function App() {
  const [crd, setCoords] = useState({ latitude:10, longitude: 76 });
  const [input,setInput]=useState('')
 
  const [weatherData, setWeatherData] = useState({
    location: "",
    temperature: "",
    description: "",
    region: "",
    country: "",
    windSpeed: "",
    pressure: "",
    humidity: "",
    image: "",
  });
  console.log(weatherData);
  useEffect(() => {
    //get device location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=f0756b3ad07d1ba6cebcb24307c1155b&query=${crd.latitude},${crd.longitude}`
        )
        .then((res) => {
          console.log(res);
           setWeatherData({
            location: res.data.location.name,
            temperature: res.data.current.temperature,
            description: res.data.current.weather_descriptions[0],
            region: res.data.location.region,
            country: res.data.location.country,
            windSpeed: res.data.current.wind_speed,
            pressure: res.data.current.pressure,
            humidity: res.data.current.humidity,
            image: res.data.current.weather_icons,
          });
          // currentWeather(weatherData)
        });
    } else {
      console.log("not");
    }
  }, []);
  var change=(value)=>{
    setInput(value)
  }
  var changeWeather=(event)=>{
    event.preventDefault();
    axios.get(`http://api.weatherstack.com/current?access_key=f0756b3ad07d1ba6cebcb24307c1155b&query=${input}`).then((res)=>{
      setWeatherData({
        location: res.data.location.name,
        temperature: res.data.current.temperature,
        description: res.data.current.weather_descriptions[0],
        region: res.data.location.region,
        country: res.data.location.country,
        windSpeed: res.data.current.wind_speed,
        pressure: res.data.current.pressure,
        humidity: res.data.current.humidity,
        image: res.data.current.weather_icons,
      });
    })
  }
  return (
    <div className="App">
    <div className="container">
    <NavbarComponent changeWeather={changeWeather} changeLocation={change} />
    <WeatherComponent weather={weatherData} />
    </div>
  
      
    </div>
  );
}

export default App;
