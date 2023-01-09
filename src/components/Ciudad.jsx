import React from "react";
import './Ciudad.css'

export default function Ciudad({city}) {
    setTimeout(()=>{
        document.querySelector('.containerDisable').className = 'container'
    },1000)
    return (
        <div className="ciudad">
                <div className="containerDisable">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {(city.temp-273.15).toFixed(2)} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {(city.latitud).toFixed(2)}º</div>
                        <div>Longitud: {(city.longitud).toFixed(2)}º</div>
                    </div>
            </div>
        </div>
    )
}