import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from "./components/Card";
import Form from './components/Form';
import {api, api_key } from "./api/api"
import { useState, useEffect } from "react";

function App() {

  const [ country, setCountry] = useState('Bangkok')
  const [data, setData ] = useState({}) 

  const fetchWeather = async (country_name ) =>{
    
    if (country_name != undefined){
      setCountry(country_name)
    }
    const res = await api.get(`/weather?q=${country}&appid=${api_key}`)
    
    setData(res.data)

  }

  useEffect( () => {
    fetchWeather();
  }, [country])

  return (
    <>
      <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
      <div className="shadow-lg bg-light gap-4">
        <h2 className="text-center mt-4">Weather App</h2>
        <Form fetchWeather={fetchWeather}/>
        <Card data={data}/>
      </div>
    </div>
    </>
    
    
  );
}

export default App;
