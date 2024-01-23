import React, { useState } from 'react'
import axios from 'axios'


const Three = () => {
    const[city,setCity] = useState("")
    const[weather,setWeather] = useState("")
    const[temp,setTemp] = useState("")
    const[desc,setDesc] = useState("")

    function handleCity(event){
        setCity(event.target.value)
    }
    

    function getWeather(){
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ef7c2c8b88d4ad7791a425d815cdde7a`)
           weatherdata.then((success)=>{
              console.log(success.data)
              setWeather(success.data.weather[0].main)
              setDesc(success.data.weather[0].description)
              setTemp(success.data.main.temp)
           })
           

    }

  return (
    <div className='bg-black p-10'>
     <div className='bg-green-400 p-10'>
        <h1 className='text-2xl font-medium'>Weather Report</h1>
        <p>I can give you weather report about your city</p>
        <input type="text" placeholder='Enter your City Name' className='mt-2 border rounded-md p-1' onChange={handleCity} value={city} /><br/>        
        <button className='text-white bg-black mt-2 p-1  rounded-md outline-none' onClick={getWeather}>Get Report</button>
         <div>
        <h1><b>Weather: {weather}</b></h1>
        <h1><b>Temperature: {temp}</b></h1>
        <h1><b>Description: {desc}</b></h1>
        </div>

     </div>
    </div>
  )
}

export default Three