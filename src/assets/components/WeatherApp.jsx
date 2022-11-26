import React, { useState } from 'react'
import './WeatherApp.css'
import styled from 'styled-components'

const Boton = styled.button`
  width: 100%;
  background-color: blue;
  color: white;
  margin-top:1rem;
  border:none;
  border-radius:4px;
`

const Input = styled.input`
  border: solid gray 1px;
  background-color: lightgray;
  color: white;
  border-radius:4px;
`

const WatherApp = () => {
  const [temperature,setTemperature] =useState(null)

  function queryTemperature(e){
    e.preventDefault()
    const city = e.target.city.value;
    const apikey = '55ba253aafdf7de32cc12019fe573c9a'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
    fetch(url)
      .then(response => response.json())
      .then(weather => setTemperature(weather.main.temp))
  }

  console.log(temperature);

  return (
    <div>
        <h2>Weather App</h2>
        <form onSubmit={queryTemperature}>
          < Input  
          type="text" 
          placeholder='Digite la ciudad'
          id='city' />
          <Boton className='submit'>Enviar</Boton>
        </form>
        {/* Operador ternario */}
        {/* {temperature !== null
        ?<div><h2>{temperature}°C</h2></div>
        :null} */}
        {/* Operador de corto circuito */}
        {temperature !== null && <div><h2 className='temp'>{temperature}°C</h2></div>}

    </div>
  )
}

export default WatherApp